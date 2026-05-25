import { listTemplateDataSchemas, type PageSpec } from "@mdwrk/lander-content-contract";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import { buildPresetFromMaps } from "@mdwrk/lander-page-template-presets";
import { compilePageTemplateGraph, educationDomainBundle } from "@mdwrk/lander-page-templates";

export interface DemoRouteNode {
  pageId: string;
  title: string;
  path: string;
  templateId: string;
  templateLabel: string;
  summary: string;
}

export interface DemoSchemaRegistryRow {
  templateId: string;
  schemaId: string;
  assetPath: string;
}

export interface LearningPathDemoSite {
  site: CompiledLanderSite;
  pages: CompiledPage[];
  routeNodes: DemoRouteNode[];
  schemaRegistry: DemoSchemaRegistryRow[];
  diagnostics: string[];
}

const DEFAULT_ORIGIN = "http://localhost:4191";

export function normalizeRouteSlug(value: string): string {
  const trimmed = String(value ?? "").trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

function canonicalForSlug(productUrl: string, slug: string): string {
  return `${productUrl.replace(/\/+$/, "")}${normalizeRouteSlug(slug)}`;
}

function buildBreadcrumbs(page: { slug: string; h1: string }) {
  const slug = normalizeRouteSlug(page.slug);
  if (slug === "/") return [{ label: "Home", href: "/" }];
  if (slug === "/academy/") return [{ label: "Home", href: "/" }, { label: "Academy", href: "/academy/" }];
  const parts = slug.replace(/^\/|\/$/g, "").split("/");
  const academyIndex = parts[0] === "academy" ? 1 : 0;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Academy", href: "/academy/" }];
  let cursor = "";
  for (const part of parts.slice(academyIndex)) {
    cursor += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, " ").replace(/\b\w/g, (value) => value.toUpperCase()),
      href: normalizeRouteSlug(`/academy${cursor}`)
    });
  }
  crumbs[crumbs.length - 1] = { label: page.h1, href: slug };
  return crumbs;
}

function pageWordCount(page: PageSpec): number {
  const text = [
    page.title,
    page.description,
    page.h1,
    page.intro,
    ...page.sections.flatMap((section) => {
      if ("body" in section && typeof section.body === "string") return [section.title, section.body];
      if ("subtitle" in section && typeof section.subtitle === "string") return [section.title, section.subtitle];
      if ("items" in section && Array.isArray(section.items)) {
        return [
          section.title,
          ...section.items.flatMap((item) => {
            if ("title" in item && "description" in item) return [item.title, item.description];
            if ("claim" in item && "evidence" in item) return [item.claim, item.evidence];
            if ("question" in item && "answer" in item) return [item.question, item.answer];
            return [];
          })
        ];
      }
      if ("packages" in section && Array.isArray(section.packages)) {
        return [section.title, ...section.packages.flatMap((item) => [item.name, item.description])];
      }
      return [section.title];
    })
  ].filter(Boolean).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

function compileDemoSite(input: Omit<CompiledLanderSite, "pages" | "pageByPath" | "diagnostics"> & { pages: PageSpec[] }): CompiledLanderSite {
  const pages = input.pages.map((page): CompiledPage => {
    const path = normalizeRouteSlug(page.slug);
    const canonicalUrl = page.seo?.canonical ?? canonicalForSlug(input.product.canonicalUrl, path);
    return {
      ...page,
      slug: path,
      path,
      canonicalUrl,
      breadcrumbs: buildBreadcrumbs({ slug: path, h1: page.h1 }),
      internalLinks: [],
      wordCount: pageWordCount(page),
      componentIntents: (page.componentIntents ?? []).map((intent) => ({ ...intent, pagePath: path, source: "declared" })),
      schemaIntents: (page.schema ?? []).map((intent, index) => ({
        ...intent,
        id: intent.id ?? `${path}#schema-${index + 1}`,
        pagePath: path,
        source: "schema"
      }))
    };
  });

  return {
    ...input,
    pages,
    pageByPath: new Map(pages.map((page) => [page.path, page])),
    diagnostics: []
  };
}

function createAcademyIndexPage(origin: string, pages: PageSpec[]): PageSpec {
  const learningPaths = pages.filter((page) =>
    page.slug.startsWith("/academy/") &&
    page.slug !== "/academy/" &&
    page.slug.split("/").filter(Boolean).length === 2 &&
    page.sections.some((section) => section.id === "courses"),
  );

  return {
    kind: "docs_bridge",
    slug: "/academy/",
    title: "MdWrk Academy",
    description: "Browse the academy learning paths built from schema-backed education templates.",
    h1: "MdWrk Academy",
    intro: "Choose a learning path. Each learning path is a structured list of courses, and each course owns its modules, quizzes, flash cards, and final test.",
    sections: [
      {
        id: "hero",
        kind: "hero",
        eyebrow: "Academy",
        title: "Schema-backed learning paths",
        subtitle: "A collection of typed learning paths compiled into visible pages and structured-data-aware routes.",
      },
      {
        id: "academy-summary",
        kind: "feature_detail",
        title: "Academy Summary",
        body: [
          "The academy page is a distinct collection surface for learning paths.",
          "",
          `- Learning paths: ${learningPaths.length}`,
          "- Learning paths are sets of courses",
          "- Courses own modules, flash cards, quizzes, and one final test",
        ].join("\n"),
      },
      {
        id: "learning-paths",
        kind: "feature_grid",
        title: "Learning Paths",
        items: learningPaths.map((page) => ({
          title: page.title,
          description: page.description,
          href: page.slug,
        })),
      },
    ],
    schema: [
      {
        id: "academy-index:webpage",
        kind: "WebPage",
        data: {
          name: "MdWrk Academy",
          description: "Browse the academy learning paths built from schema-backed education templates.",
          url: `${origin.replace(/\/+$/, "")}/academy/`,
        },
      },
      {
        id: "academy-index:itemlist",
        kind: "ItemList",
        data: {
          name: "Academy learning paths",
          description: "Learning paths available in the MdWrk Academy demo.",
          url: `${origin.replace(/\/+$/, "")}/academy/`,
          items: learningPaths.map((page) => ({
            name: page.title,
            url: page.slug,
          })),
        },
      },
    ],
  };
}

function createDemoHomePage(origin: string, pages: PageSpec[]): PageSpec {
  const learningPaths = pages.filter((page) =>
    page.slug.startsWith("/academy/") &&
    page.slug !== "/academy/" &&
    page.slug.split("/").filter(Boolean).length === 2 &&
    page.sections.some((section) => section.id === "courses"),
  );

  return {
    kind: "home",
    slug: "/",
    title: "MdWrk Academy Home",
    description: "Home page for the MdWrk academy demo and its learning-path collection.",
    h1: "MdWrk Academy",
    intro: "Browse the academy collection, then move into learning paths, courses, modules, quizzes, flash cards, and final tests.",
    sections: [
      {
        id: "hero",
        kind: "hero",
        eyebrow: "Home",
        title: "Schema-backed academy home",
        subtitle: "Use the root page as the academy landing page, then enter the learning-path collection or jump directly into any path.",
      },
      {
        id: "academy-summary",
        kind: "feature_detail",
        title: "Academy Summary",
        body: [
          "This demo models an academy as a collection of learning paths.",
          "",
          `- Learning paths: ${learningPaths.length}`,
          "- Courses own modules, flash cards, quizzes, and one final test",
          "- Visible rendering and structured data come from the same compiled graph",
        ].join("\n"),
      },
      {
        id: "learning-paths",
        kind: "feature_grid",
        title: "Learning Paths",
        items: learningPaths.map((page) => ({
          title: page.title,
          description: page.description,
          href: page.slug,
        })),
      },
      {
        id: "entry-points",
        kind: "feature_grid",
        title: "Entry Points",
        items: [
          {
            title: "Academy",
            description: "Browse all available learning paths.",
            href: "/academy/",
          },
          {
            title: "AI Learning Architect Academy",
            description: "Open the primary learning path.",
            href: "/academy/ai-learning-architect/",
          },
          {
            title: "Prompt Delivery Studio",
            description: "Open the second learning path.",
            href: "/academy/prompt-delivery-studio/",
          },
        ],
      },
    ],
    schema: [
      {
        id: "demo-home:webpage",
        kind: "WebPage",
        data: {
          name: "MdWrk Academy Home",
          description: "Home page for the MdWrk academy demo and its learning-path collection.",
          url: `${origin.replace(/\/+$/, "")}/`,
        },
      },
      {
        id: "demo-home:itemlist",
        kind: "ItemList",
        data: {
          name: "Academy learning paths",
          description: "Learning paths available from the MdWrk academy home page.",
          url: `${origin.replace(/\/+$/, "")}/`,
          items: learningPaths.map((page) => ({
            name: page.title,
            url: page.slug,
          })),
        },
      },
    ],
  };
}

function buildEducationPreset() {
  return buildPresetFromMaps({
    id: "preset.education-ai-architect",
    title: "AI Learning Architect Academy",
    description: "Schema-backed education site for learning paths, courses, modules, quizzes, and course tests.",
    domain: "education",
    entryPageKey: "learningPath",
    bundles: [educationDomainBundle],
    pages: {
      learningPath: {
        id: "academy:path",
        templateId: "education.learning-path",
        slug: "/academy/ai-learning-architect/",
        title: "AI Learning Architect Academy",
        description: "A multi-course learning path for designing, validating, and publishing structured learning systems.",
        summary: "Build, validate, and publish structured learning systems with schema-backed authoring.",
        data: {
          eyebrow: "Learning Path",
          intro: "A guided academy that moves from curriculum design to page-template delivery and assessment orchestration.",
          outcomes: [
            "Model learning systems as structured data.",
            "Ship schema-backed pages for paths, courses, modules, quizzes, and tests.",
            "Publish structured-data-ready educational experiences."
          ],
          prerequisites: [
            "Comfort reading TypeScript and JSON.",
            "Basic familiarity with MdWrk Pages concepts."
          ],
          difficulty: "intermediate",
          estimatedDuration: "4 weeks",
          faq: [
            {
              question: "What is the output of this path?",
              answer: "A schema-backed learning experience with reusable templates and structured data."
            }
          ],
          schemaKinds: ["ItemList"]
        }
      },
      courseSystems: {
        id: "academy:course:systems",
        templateId: "education.course",
        slug: "/academy/ai-learning-architect/learning-systems/",
        title: "Structured Learning Systems",
        description: "Design learning paths and courses as durable, typed systems.",
        summary: "Translate instructional intent into reusable content contracts.",
        order: 1,
        data: {
          eyebrow: "Course 01",
          intro: "Start by defining the typed relationships between learning paths, courses, modules, quizzes, and tests.",
          objectives: [
            "Model the GenLMS hierarchy cleanly.",
            "Choose the right schema surface for each education entity."
          ],
          prerequisites: ["Read the academy overview."],
          completionCriteria: "Complete all three modules, the related quizzes, and pass the course test.",
          testCallout: "Finish the final systems test after all three modules and their quizzes.",
          faq: [
            {
              question: "Why separate course tests from quizzes?",
              answer: "Course quizzes validate comprehension within the course while the final course test validates the whole course sequence."
            }
          ],
          schemaKinds: ["Course", "CourseInstance"]
        }
      },
      flashcardsSystems: {
        id: "academy:flashcards:systems",
        templateId: "education.flashcards",
        slug: "/academy/ai-learning-architect/learning-systems/flashcards/",
        title: "Flash Cards: Learning Systems",
        description: "Optional flash cards for the structured learning systems course.",
        summary: "Review core course concepts as separate question-and-answer cards.",
        order: 1,
        data: {
          eyebrow: "Flash Cards",
          body: "Use these cards as a lightweight recall pass before attempting the course quiz.",
          cards: [
            {
              question: "What should JSON Schemas own in this model?",
              answer: "Page-local authored data contracts.",
              explanation: "Topology and relationship rules stay with the template graph."
            },
            {
              question: "Where does the final test belong?",
              answer: "At the course level.",
              explanation: "Course tests validate the full course sequence, not a single module."
            }
          ],
          schemaKinds: ["LearningResource"]
        }
      },
      moduleContracts: {
        id: "academy:module:contracts",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/learning-systems/contracts/",
        title: "Contracting Learning Entities",
        description: "Define the required data surfaces for every learning entity.",
        summary: "Turn instructional objects into stable JSON Schema-backed contracts.",
        order: 1,
        data: {
          eyebrow: "Module 01",
          intro: "This lesson focuses on strict entity contracts for path, course, module, quiz, and test payloads.",
          body: "Use JSON Schemas to validate authored learning entities before page generation. Keep each schema page-local, explicit, and fail-closed. The module demonstrates how typed payloads improve preview reliability, publishing safety, and cross-system reuse.",
          keyTakeaways: [
            "Schemas should validate authored payloads before compile.",
            "Each entity needs its own stable contract.",
            "Strict data contracts reduce preview drift."
          ],
          nextStep: "Take the quiz to confirm you can identify the right schema boundary.",
          faq: [
            {
              question: "What should not live in the schema?",
              answer: "Implicit topology rules should stay in the template graph rather than in page-local payload shapes."
            }
          ],
          schemaKinds: ["TechArticle"]
        }
      },
      quizContracts: {
        id: "academy:quiz:contracts",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/contract-boundaries-quiz/",
        title: "Quiz: Contract Boundaries",
        description: "Check understanding of schema-backed entity boundaries.",
        summary: "Verify you can identify what belongs in a page-local contract.",
        order: 1,
        data: {
          eyebrow: "Quiz",
          intro: "Answer a short course quiz on entity contracts and validation timing.",
          passingGuidance: "Aim for full correctness before moving to the next module.",
          questions: [
            {
              question: "Which surface should validate the data for an `education.module` page?",
              options: [
                "Only the React component",
                "The page template JSON Schema contract",
                "Only the Docker image",
                "Only the Markdown renderer"
              ],
              correctAnswerIndex: 1,
              explanation: "The JSON Schema contract should validate authored page data before rendering."
            }
          ],
          faq: [
            {
              question: "Why keep quizzes terminal?",
              answer: "They behave as assessment leaves, not as branching page hubs."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      },
      moduleTopology: {
        id: "academy:module:topology",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/learning-systems/topology/",
        title: "Graph Topology For Assessments",
        description: "Model the route and relationship graph for learning pages.",
        summary: "Use explicit parent, child, and assessment links to keep navigation and preview coherent.",
        order: 2,
        data: {
          eyebrow: "Module 02",
          intro: "This lesson focuses on link slots and page graph shape.",
          body: "A learning path should link to courses, and courses should own the module sequence, the course quizzes, and a single final test. That topology is a template concern, not a loose convention. The compiler can then derive predictable routes, navigation, and structured-data intent placement.",
          keyTakeaways: [
            "Topology belongs in template graph rules.",
            "Ordered links make course sequencing legible.",
            "Assessment leaves simplify preview and crawl behavior."
          ],
          nextStep: "Return to the course page and use the graph quiz to confirm the path-course-module-assessment structure.",
          schemaKinds: ["TechArticle"]
        }
      },
      quizTopology: {
        id: "academy:quiz:topology",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/graph-topology-quiz/",
        title: "Quiz: Graph Topology",
        description: "Check understanding of course and assessment relationships.",
        summary: "Validate the canonical learning graph.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm that you can place quizzes and tests at the right layer.",
          passingGuidance: "If you miss this, revisit the topology lesson before proceeding.",
          questions: [
            {
              question: "Where should a final course test attach in the canonical education graph?",
              options: [
                "Directly to the learning path",
                "To each quiz",
                "To the course",
                "To the module body text"
              ],
              correctAnswerIndex: 2,
              explanation: "The final assessment belongs at the course level, not at the path or module level."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      },
      moduleAssessmentDesign: {
        id: "academy:module:assessment-design",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/learning-systems/assessment-design/",
        title: "Assessment Design For Course-Owned Quizzes",
        description: "Design a quiz structure that stays course-owned while covering each module thoroughly.",
        summary: "Add a third module to the systems course and make room for two quizzes per module.",
        order: 3,
        data: {
          eyebrow: "Module 03",
          intro: "This lesson focuses on scaling quiz coverage without breaking the course-owned assessment model.",
          body: "A course can own all of its quizzes while still giving each module rich assessment coverage. The key is to keep the ownership at the course level while ordering quizzes clearly enough that module pages can point learners to the right ones.",
          keyTakeaways: [
            "Course-owned quizzes can still map cleanly back to modules.",
            "Ordered quiz sets make multi-quiz modules understandable.",
            "Assessment breadth should grow without changing the ownership contract.",
          ],
          nextStep: "Return to the course page and complete the assessment-design quizzes.",
          schemaKinds: ["TechArticle"],
        }
      },
      quizContractsAdvanced: {
        id: "academy:quiz:contracts-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/contract-boundaries-quiz-2/",
        title: "Quiz: Contract Boundaries II",
        description: "Second quiz for the contract module.",
        summary: "Reinforce strict data-contract thinking.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Take a second contract quiz to confirm the model under repeated assessment.",
          passingGuidance: "Review the first module again if you miss this.",
          questions: [
            {
              question: "Why keep JSON Schema validation separate from topology validation?",
              options: [
                "Because authored payload shape and graph rules are different concerns",
                "Because quizzes must be nested under modules",
                "Because Docker requires it",
                "Because breadcrumbs are ordered lists",
              ],
              correctAnswerIndex: 0,
              explanation: "Schema shape and graph topology are related, but not the same responsibility.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizTopologyAdvanced: {
        id: "academy:quiz:topology-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/graph-topology-quiz-2/",
        title: "Quiz: Graph Topology II",
        description: "Second quiz for the topology module.",
        summary: "Validate the topology model under a second pass.",
        order: 4,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm the graph model again with a second topology quiz.",
          passingGuidance: "Revisit the topology lesson if needed.",
          questions: [
            {
              question: "What allows a course to support several quizzes without changing the learning-path contract?",
              options: [
                "Ordered course-owned quiz links",
                "Moving quizzes onto the home page",
                "Removing modules",
                "Dropping the course test",
              ],
              correctAnswerIndex: 0,
              explanation: "The course keeps ownership, and order keeps the quiz set understandable.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizAssessmentDesign: {
        id: "academy:quiz:assessment-design",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/assessment-design-quiz-1/",
        title: "Quiz: Assessment Design I",
        description: "First quiz for the assessment-design module.",
        summary: "Validate the multi-quiz module pattern.",
        order: 5,
        data: {
          eyebrow: "Quiz",
          intro: "Check whether you can apply the multi-quiz module approach correctly.",
          passingGuidance: "Review the assessment-design module if you miss this.",
          questions: [
            {
              question: "How many quizzes should each module in this demo course be able to point to?",
              options: [
                "At least two",
                "Zero",
                "Exactly one forever",
                "Only the final test",
              ],
              correctAnswerIndex: 0,
              explanation: "This updated course is intentionally structured around at least two quizzes per module.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizAssessmentDesignAdvanced: {
        id: "academy:quiz:assessment-design-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/learning-systems/assessment-design-quiz-2/",
        title: "Quiz: Assessment Design II",
        description: "Second quiz for the assessment-design module.",
        summary: "Reinforce the course-owned multi-quiz pattern.",
        order: 6,
        data: {
          eyebrow: "Quiz",
          intro: "Take a second assessment-design quiz to confirm the structure.",
          passingGuidance: "Review the module if needed before retrying.",
          questions: [
            {
              question: "What keeps several quizzes per module understandable in this course?",
              options: [
                "Consistent ordering and module-to-quiz navigation",
                "Random route names",
                "Removing flash cards",
                "Flattening the academy page",
              ],
              correctAnswerIndex: 0,
              explanation: "Ordering and navigation let several quizzes stay comprehensible without changing ownership.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      testSystems: {
        id: "academy:test:systems",
        templateId: "education.course-test",
        slug: "/academy/ai-learning-architect/learning-systems/final-test/",
        title: "Course Test: Learning Systems",
        description: "Final assessment for structured learning systems.",
        summary: "Validate contract and topology mastery.",
        order: 3,
        data: {
          eyebrow: "Course Test",
          intro: "Complete the final assessment once you finish all three modules and the course quizzes.",
          readinessChecklist: [
            "Finish both learning-systems modules.",
            "Review quiz explanations.",
            "Be ready to explain schema versus topology ownership."
          ],
          scoreSummary: "A strong result shows you can model education entities without mixing schema and graph responsibilities.",
          passingGuidance: "Use the quiz explanations if you need a second attempt.",
          questions: [
            {
              question: "What pair best separates responsibility in this system?",
              options: [
                "Dockerfile and CSS",
                "Schema contract and topology graph",
                "Heading copy and color palette",
                "Route slug and favicon"
              ],
              correctAnswerIndex: 1,
              explanation: "JSON Schemas govern page-local data, while the template graph governs topology and relationships."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      },
      courseDelivery: {
        id: "academy:course:delivery",
        templateId: "education.course",
        slug: "/academy/ai-learning-architect/template-delivery/",
        title: "Template Delivery And Publishing",
        description: "Build the runtime demo, preview, and publish rail for education pages.",
        summary: "Move from governed template contracts to a routable demo site.",
        order: 2,
        data: {
          eyebrow: "Course 02",
          intro: "Apply the education contracts by compiling a polished demo site and wiring its structured data.",
          objectives: [
            "Compile a page graph into a live site.",
            "Render page templates and structured data together.",
            "Package the result as a Docker-served demo."
          ],
          prerequisites: ["Complete Structured Learning Systems."],
          completionCriteria: "Finish all three delivery modules, the related quizzes, and the final publishing test.",
          testCallout: "The publishing test closes the course.",
          schemaKinds: ["Course", "CourseInstance"]
        }
      },
      flashcardsDelivery: {
        id: "academy:flashcards:delivery",
        templateId: "education.flashcards",
        slug: "/academy/ai-learning-architect/template-delivery/flashcards/",
        title: "Flash Cards: Template Delivery",
        description: "Optional flash cards for the template delivery course.",
        summary: "Review runtime delivery concepts in a separate flash card page.",
        order: 1,
        data: {
          eyebrow: "Flash Cards",
          body: "Use these cards to rehearse delivery concepts before you take the course quiz.",
          cards: [
            {
              question: "Why do we keep the demo Dockerized?",
              answer: "So the learning site can be launched and verified predictably.",
              explanation: "That makes nested routes, health checks, and runtime review reproducible."
            },
            {
              question: "Why share one compiled page between visible rendering and JSON-LD?",
              answer: "To avoid drift between human-facing and machine-facing content.",
              explanation: "Both surfaces should come from the same compiled source."
            }
          ],
          schemaKinds: ["LearningResource"]
        }
      },
      moduleRendering: {
        id: "academy:module:rendering",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/template-delivery/rendering/",
        title: "Rendering Structured Learning Pages",
        description: "Render compiled page specs through the MdWrk page surface.",
        summary: "Use one compiled site for both visible pages and assistant-facing structure.",
        order: 1,
        data: {
          eyebrow: "Module 03",
          intro: "Render the same compiled education content through visible and structured-data rails.",
          body: "A good demo site should render page sections, navigation, and assessments for people while also surfacing consistent JSON-LD for search and assistant clients. The key is to compile once and feed both the visible renderer and the structured-data component from the same compiled page.",
          keyTakeaways: [
            "Compile once, render twice.",
            "Visible pages and JSON-LD should share the same source page.",
            "Structured data belongs in the demo runtime, not in separate hand-authored snippets."
          ],
          nextStep: "Return to the course page and confirm the rendering split in the quiz.",
          schemaKinds: ["TechArticle"]
        }
      },
      quizRendering: {
        id: "academy:quiz:rendering",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/rendering-split-quiz/",
        title: "Quiz: Rendering Split",
        description: "Check understanding of visible versus structured-data rendering.",
        summary: "Verify the compile-once rendering pattern.",
        order: 1,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm why the same compiled page should drive both rendering rails.",
          passingGuidance: "If needed, inspect the JSON-LD preview in the demo before retrying.",
          questions: [
            {
              question: "Why should a demo site derive both page preview and JSON-LD from the same compiled page?",
              options: [
                "To avoid route duplication and data drift",
                "To make Docker smaller",
                "To hide the page graph",
                "To remove schema validation"
              ],
              correctAnswerIndex: 0,
              explanation: "Using the same compiled page avoids divergent content between visible and machine-facing surfaces."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      },
      modulePublishing: {
        id: "academy:module:publishing",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/template-delivery/publishing/",
        title: "Packaging And Publishing The Demo",
        description: "Ship the education demo as a Dockerized site.",
        summary: "Finish the delivery rail with reproducible packaging and health checks.",
        order: 2,
        data: {
          eyebrow: "Module 04",
          intro: "This lesson closes the loop with Docker packaging and verification.",
          body: "A demo site is only useful when it can be launched predictably. Package the compiled example with a small nginx runtime, preserve SPA fallback routing, and expose a health endpoint so the demo can be validated in CI or local review. Keep the Docker rail close to the example so the site is self-contained.",
          keyTakeaways: [
            "Examples should ship with their own Dockerfile and compose rail.",
            "SPA fallback is required for nested learning routes.",
            "A health endpoint gives a simple runtime verification surface."
          ],
          nextStep: "Return to the course page before taking the publishing quiz.",
          schemaKinds: ["TechArticle"]
        }
      },
      quizPublishing: {
        id: "academy:quiz:publishing",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/docker-delivery-quiz/",
        title: "Quiz: Docker Delivery",
        description: "Check understanding of Docker-based demo delivery.",
        summary: "Validate the runtime packaging contract.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm the packaging pieces required for a routed education demo.",
          passingGuidance: "Retry after reviewing the module packaging checklist.",
          questions: [
            {
              question: "Why does the demo nginx config need SPA fallback routing?",
              options: [
                "To improve TypeScript type inference",
                "To support nested learning-path routes in a static site",
                "To avoid writing a Dockerfile",
                "To disable structured data"
              ],
              correctAnswerIndex: 1,
              explanation: "The demo uses nested routes that need to resolve back to `index.html`."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      },
      moduleValidation: {
        id: "academy:module:validation",
        templateId: "education.module",
        slug: "/academy/ai-learning-architect/template-delivery/validation/",
        title: "Validation And Verification Rails",
        description: "Close the delivery course with validation and release verification.",
        summary: "Add a third module to the delivery course.",
        order: 3,
        data: {
          eyebrow: "Module 05",
          intro: "This lesson focuses on verifying the published demo before release.",
          body: "A publishable learning demo should not stop at packaging. It should include explicit validation and verification rails so the deployed result is checked for route integrity, structured-data output, and expected assessment behavior.",
          keyTakeaways: [
            "Delivery should end with verification, not just packaging.",
            "Published demos need route and metadata checks.",
            "Validation is part of the course outcome.",
          ],
          nextStep: "Return to the course page and take the verification quizzes.",
          schemaKinds: ["TechArticle"],
        }
      },
      quizRenderingAdvanced: {
        id: "academy:quiz:rendering-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/rendering-split-quiz-2/",
        title: "Quiz: Rendering Split II",
        description: "Second quiz for the rendering module.",
        summary: "Reinforce the compile-once rendering model.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Take a second rendering quiz to confirm the compile-once pattern.",
          passingGuidance: "Review the rendering module if you miss this.",
          questions: [
            {
              question: "What risk does the compile-once model reduce?",
              options: [
                "Content drift between visible and machine-facing surfaces",
                "The number of courses in a learning path",
                "Breadcrumb consistency",
                "The need for flash cards",
              ],
              correctAnswerIndex: 0,
              explanation: "One compiled source reduces drift between output surfaces.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizPublishingAdvanced: {
        id: "academy:quiz:publishing-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/docker-delivery-quiz-2/",
        title: "Quiz: Docker Delivery II",
        description: "Second quiz for the publishing module.",
        summary: "Reinforce the packaging contract.",
        order: 4,
        data: {
          eyebrow: "Quiz",
          intro: "Take a second publishing quiz to confirm the packaging model.",
          passingGuidance: "Review the publishing module if needed.",
          questions: [
            {
              question: "Why keep the Docker rail close to the example?",
              options: [
                "So the site remains self-contained and verifiable",
                "So modules can own tests directly",
                "So learning paths lose their courses",
                "So JSON-LD is removed",
              ],
              correctAnswerIndex: 0,
              explanation: "A self-contained example is easier to launch and verify repeatedly.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizValidation: {
        id: "academy:quiz:validation",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/validation-quiz-1/",
        title: "Quiz: Validation Rails I",
        description: "First quiz for the validation module.",
        summary: "Validate the release-verification model.",
        order: 5,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm the validation expectations for a published learning demo.",
          passingGuidance: "Review the validation module if needed.",
          questions: [
            {
              question: "What should the validation rail check after publish?",
              options: [
                "Routes, structured data, and expected assessment behavior",
                "Only the page title",
                "Only the flash cards",
                "Only the root route",
              ],
              correctAnswerIndex: 0,
              explanation: "Verification should cover the main runtime behaviors, not just one page detail.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      quizValidationAdvanced: {
        id: "academy:quiz:validation-advanced",
        templateId: "education.quiz",
        slug: "/academy/ai-learning-architect/template-delivery/validation-quiz-2/",
        title: "Quiz: Validation Rails II",
        description: "Second quiz for the validation module.",
        summary: "Reinforce the verification model.",
        order: 6,
        data: {
          eyebrow: "Quiz",
          intro: "Take a second validation quiz to confirm the release-check pattern.",
          passingGuidance: "Review the validation module before retrying if needed.",
          questions: [
            {
              question: "Why treat verification as a module-level teaching surface?",
              options: [
                "Because release confidence depends on repeatable checks learners can understand",
                "Because quizzes should replace tests",
                "Because academy pages should equal home pages",
                "Because modules should not have next steps",
              ],
              correctAnswerIndex: 0,
              explanation: "Verification is a teachable and repeatable release concern.",
            }
          ],
          schemaKinds: ["WebPage"],
        }
      },
      testDelivery: {
        id: "academy:test:delivery",
        templateId: "education.course-test",
        slug: "/academy/ai-learning-architect/template-delivery/final-test/",
        title: "Course Test: Template Delivery",
        description: "Final assessment for the demo publishing course.",
        summary: "Validate rendering, structured data, and packaging understanding.",
        order: 3,
        data: {
          eyebrow: "Course Test",
          intro: "Complete the publishing assessment after the rendering, packaging, and validation modules.",
          readinessChecklist: [
            "Inspect the compiled routes.",
            "Review the structured data preview.",
            "Confirm the Docker and healthcheck files."
          ],
          scoreSummary: "Passing this assessment shows you can turn the governed contracts into a working example site.",
          passingGuidance: "Use the demo sidebars to review route and schema state before retrying.",
          questions: [
            {
              question: "Which pair best demonstrates a production-ready education demo?",
              options: [
                "Schema validation and structured-data rendering",
                "Random copy and large images",
                "Inline styles and missing routes",
                "A quiz without modules"
              ],
              correctAnswerIndex: 0,
              explanation: "A strong education demo validates structured inputs and renders machine-facing metadata alongside visible pages."
            }
          ],
          schemaKinds: ["WebPage"]
        }
      }
    },
    links: {
      learningPath: { courses: ["courseSystems", "courseDelivery"] },
      courseSystems: { modules: ["moduleContracts", "moduleTopology", "moduleAssessmentDesign"], flashcards: ["flashcardsSystems"], quizzes: ["quizContracts", "quizContractsAdvanced", "quizTopology", "quizTopologyAdvanced", "quizAssessmentDesign", "quizAssessmentDesignAdvanced"], test: ["testSystems"] },
      moduleContracts: { next: ["moduleTopology"] },
      moduleTopology: { previous: ["moduleContracts"], next: ["moduleAssessmentDesign"] },
      moduleAssessmentDesign: { previous: ["moduleTopology"] },
      courseDelivery: { modules: ["moduleRendering", "modulePublishing", "moduleValidation"], flashcards: ["flashcardsDelivery"], quizzes: ["quizRendering", "quizRenderingAdvanced", "quizPublishing", "quizPublishingAdvanced", "quizValidation", "quizValidationAdvanced"], test: ["testDelivery"] },
      moduleRendering: { next: ["modulePublishing"] },
      modulePublishing: { previous: ["moduleRendering"], next: ["moduleValidation"] },
      moduleValidation: { previous: ["modulePublishing"] }
    }
  });
}

function buildSecondEducationPreset() {
  return buildPresetFromMaps({
    id: "preset.education-prompt-delivery-studio",
    title: "Prompt Delivery Studio",
    description: "A second full learning path focused on prompt research, delivery QA, and governed publishing surfaces.",
    domain: "education",
    entryPageKey: "learningPath",
    bundles: [educationDomainBundle],
    pages: {
      learningPath: {
        id: "studio:path",
        templateId: "education.learning-path",
        slug: "/academy/prompt-delivery-studio/",
        title: "Prompt Delivery Studio",
        description: "A full learning path for prompt architecture, delivery QA, and governed publishing review.",
        summary: "Practice prompt-system authoring through multiple courses, course quizzes, flash cards, and final tests.",
        data: {
          eyebrow: "Learning Path",
          intro: "This second path is a complete academy lane with multiple courses and full assessment structure, not just a placeholder collection entry.",
          outcomes: [
            "Navigate a second full learning path from the academy index.",
            "Model a prompt-delivery curriculum as sequenced courses with course-owned assessments.",
            "Publish a second governed path with flash cards, quizzes, and final tests.",
          ],
          prerequisites: [
            "Comfort reviewing prompt flows and content pipelines.",
            "Basic familiarity with structured page authoring.",
          ],
          difficulty: "intermediate",
          estimatedDuration: "3 weeks",
          faq: [
            {
              question: "Why include a second full path?",
              answer: "To prove the academy page is a real learning-path collection and to demonstrate multiple complete curricula in one demo.",
            },
          ],
          schemaKinds: ["ItemList"],
        },
      },
      courseResearch: {
        id: "studio:course:research",
        templateId: "education.course",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/",
        title: "Prompt Research Systems",
        description: "Design a research lane for prompts, source gathering, and evaluation boundaries.",
        summary: "Turn prompt research into a governed, testable course sequence.",
        order: 1,
        data: {
          eyebrow: "Course 01",
          intro: "Start with the research side of prompt delivery: source capture, synthesis constraints, and evaluation rails.",
          objectives: [
            "Define prompt research boundaries and evidence sources.",
            "Turn source evaluation into reusable course material.",
          ],
          prerequisites: ["Open the learning path overview."],
          completionCriteria: "Complete both modules, the course quizzes, and the final course test.",
          testCallout: "Finish the final research systems test after the modules and quizzes.",
          schemaKinds: ["Course", "CourseInstance"],
        },
      },
      flashcardsResearch: {
        id: "studio:flashcards:research",
        templateId: "education.flashcards",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/flashcards/",
        title: "Flash Cards: Prompt Research Systems",
        description: "Optional flash cards for the prompt research course.",
        summary: "Review prompt research concepts before taking the course quizzes.",
        order: 1,
        data: {
          eyebrow: "Flash Cards",
          body: "Use these cards as a recall pass before the research quizzes.",
          cards: [
            {
              question: "What should a prompt research system preserve?",
              answer: "The source boundary, the synthesis boundary, and the evaluation boundary.",
              explanation: "Those boundaries keep research prompts auditable and reusable.",
            },
            {
              question: "Why add source constraints to research prompts?",
              answer: "To keep retrieval and synthesis aligned with explicit evidence expectations.",
              explanation: "Clear constraints reduce drift and improve reviewability.",
            },
          ],
          schemaKinds: ["LearningResource"],
        },
      },
      moduleSources: {
        id: "studio:module:sources",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/source-boundaries/",
        title: "Source Boundaries For Prompt Research",
        description: "Define what counts as valid source input for prompt work.",
        summary: "Scope source ingestion and evidence boundaries for the course.",
        order: 1,
        data: {
          eyebrow: "Module 01",
          intro: "This lesson focuses on source quality and scope for prompt research.",
          body: "Prompt systems need explicit rules for where evidence comes from, how it is filtered, and which sources are strong enough for downstream synthesis. Treat those decisions as first-class instructional material.",
          keyTakeaways: [
            "Research prompts need explicit source boundaries.",
            "Evidence quality affects every later prompt stage.",
            "Governed source intake improves repeatability.",
          ],
          nextStep: "Return to the course page and continue into synthesis constraints.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizSources: {
        id: "studio:quiz:sources",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/source-boundaries-quiz/",
        title: "Quiz: Source Boundaries",
        description: "Check understanding of prompt research source boundaries.",
        summary: "Validate the source-governance concepts from the first module.",
        order: 1,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm that you can identify the right source boundary for prompt research work.",
          passingGuidance: "Review the source-boundary lesson if you miss this.",
          questions: [
            {
              question: "Why should prompt research define source boundaries up front?",
              options: [
                "To reduce evidence drift and keep synthesis auditable",
                "To avoid using breadcrumbs",
                "To hide the learning path",
                "To remove JSON Schema validation",
              ],
              correctAnswerIndex: 0,
              explanation: "Source boundaries prevent drift and make later synthesis easier to review.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      moduleSynthesis: {
        id: "studio:module:synthesis",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/synthesis-constraints/",
        title: "Synthesis Constraints",
        description: "Turn research findings into constrained prompt outputs.",
        summary: "Control how research becomes prompt-ready synthesis.",
        order: 2,
        data: {
          eyebrow: "Module 02",
          intro: "This lesson focuses on keeping synthesis outputs disciplined and reviewable.",
          body: "A strong prompt delivery system does not jump from research into freeform generation. It constrains synthesis structure, expected claims, and allowable extrapolation so later reviewers can trace how the prompt was built.",
          keyTakeaways: [
            "Synthesis constraints prevent prompt sprawl.",
            "Reviewability depends on predictable output shape.",
            "Prompt quality improves when extrapolation is limited explicitly.",
          ],
          nextStep: "Return to the course page and take the synthesis quiz.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizSynthesis: {
        id: "studio:quiz:synthesis",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/synthesis-constraints-quiz/",
        title: "Quiz: Synthesis Constraints",
        description: "Check understanding of constrained synthesis for prompt systems.",
        summary: "Validate the prompt synthesis model.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm that you can distinguish governed synthesis from unconstrained generation.",
          passingGuidance: "If needed, revisit the synthesis lesson before continuing.",
          questions: [
            {
              question: "What is the main goal of synthesis constraints in prompt delivery?",
              options: [
                "To keep output reviewable and bounded",
                "To replace course tests",
                "To avoid structured data",
                "To flatten the academy into one page",
              ],
              correctAnswerIndex: 0,
              explanation: "Constraints keep outputs consistent, reviewable, and fit for downstream prompt use.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      testResearch: {
        id: "studio:test:research",
        templateId: "education.course-test",
        slug: "/academy/prompt-delivery-studio/prompt-research-systems/final-test/",
        title: "Course Test: Prompt Research Systems",
        description: "Final assessment for the prompt research course.",
        summary: "Validate source and synthesis mastery.",
        order: 3,
        data: {
          eyebrow: "Course Test",
          intro: "Complete the research systems assessment after both modules and both quizzes.",
          readinessChecklist: [
            "Review source-boundary expectations.",
            "Review synthesis constraints.",
            "Be ready to explain why both matter together.",
          ],
          scoreSummary: "Passing shows that you can design a governed prompt research course end to end.",
          passingGuidance: "Review the course quizzes if you need another attempt.",
          questions: [
            {
              question: "Which pair best defines a governed prompt research system?",
              options: [
                "Source boundaries and synthesis constraints",
                "Flat colors and card hover states",
                "Module titles and favicon choices",
                "Docker ports and breadcrumbs",
              ],
              correctAnswerIndex: 0,
              explanation: "Those two layers keep the research path disciplined from evidence intake through synthesis.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      courseDelivery: {
        id: "studio:course:delivery",
        templateId: "education.course",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/",
        title: "Release And Review Ops",
        description: "Ship prompt systems through review, QA, and publishing checks.",
        summary: "Use a second course to show a fuller learning path with multiple course branches.",
        order: 2,
        data: {
          eyebrow: "Course 02",
          intro: "After research design, move into review loops, release QA, and publishing checks for prompt delivery.",
          objectives: [
            "Define review checkpoints for prompt-system release.",
            "Turn QA and publishing checks into reusable course content.",
          ],
          prerequisites: ["Complete Prompt Research Systems."],
          completionCriteria: "Finish both modules, both quizzes, and the final release test.",
          testCallout: "Close the course with the release-and-review final test.",
          schemaKinds: ["Course", "CourseInstance"],
        },
      },
      flashcardsDelivery: {
        id: "studio:flashcards:delivery",
        templateId: "education.flashcards",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/flashcards/",
        title: "Flash Cards: Release And Review Ops",
        description: "Optional flash cards for the release-and-review course.",
        summary: "Recall QA and publishing concepts before the course quizzes.",
        order: 1,
        data: {
          eyebrow: "Flash Cards",
          body: "Use these cards to rehearse the release vocabulary and review flow.",
          cards: [
            {
              question: "What should release QA verify in a prompt system?",
              answer: "Prompt behavior, review signoff, and publishability checks.",
              explanation: "QA has to cover the prompt runtime and the governance surface.",
            },
            {
              question: "Why include a publishing checklist in the course?",
              answer: "Because delivery quality is not complete until the prompt system can be reviewed and shipped predictably.",
              explanation: "Publishing is part of the runtime outcome, not an afterthought.",
            },
          ],
          schemaKinds: ["LearningResource"],
        },
      },
      moduleReview: {
        id: "studio:module:review",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/review-checkpoints/",
        title: "Review Checkpoints",
        description: "Define staged review checkpoints for prompt releases.",
        summary: "Make review steps explicit in the delivery course.",
        order: 1,
        data: {
          eyebrow: "Module 03",
          intro: "This lesson focuses on review sequencing for prompt delivery.",
          body: "A mature prompt-delivery lane needs explicit review checkpoints: draft review, evidence review, QA review, and publish approval. Sequencing those stages makes the release process teachable and enforceable.",
          keyTakeaways: [
            "Review checkpoints keep prompt delivery accountable.",
            "Different review stages answer different release questions.",
            "Structured release gates are part of the learning contract.",
          ],
          nextStep: "Return to the course page and continue into publishing QA.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizReview: {
        id: "studio:quiz:review",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/review-checkpoints-quiz/",
        title: "Quiz: Review Checkpoints",
        description: "Check understanding of staged prompt review.",
        summary: "Validate the review-gate model.",
        order: 1,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm that you can place review checkpoints in the right release order.",
          passingGuidance: "Review the review-checkpoint lesson if needed.",
          questions: [
            {
              question: "Why separate review checkpoints in a prompt delivery course?",
              options: [
                "Because each stage validates a different release concern",
                "Because quizzes should contain flash cards",
                "Because learning paths should have no courses",
                "Because structured data replaces review",
              ],
              correctAnswerIndex: 0,
              explanation: "Separate checkpoints keep release decisions legible and teachable.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      modulePublishing: {
        id: "studio:module:publishing",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/publishing-qa/",
        title: "Publishing QA",
        description: "Turn prompt delivery into a predictable publishing checklist.",
        summary: "Close the second path with publish-ready QA concepts.",
        order: 2,
        data: {
          eyebrow: "Module 04",
          intro: "This lesson focuses on the final QA surface for prompt delivery and publishing.",
          body: "Publishing QA checks whether the prompt system, its learning content, and its surfaced artifacts are all ready to ship together. In the demo, that means the page graph, the visible rendering, and the machine-facing metadata stay aligned.",
          keyTakeaways: [
            "Publishing QA closes the delivery loop.",
            "Visible content and structured data should stay in sync.",
            "Release readiness is a course-level outcome, not a one-off step.",
          ],
          nextStep: "Return to the course page and take the final delivery quiz.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizPublishing: {
        id: "studio:quiz:publishing",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/publishing-qa-quiz/",
        title: "Quiz: Publishing QA",
        description: "Check understanding of publish-ready prompt delivery.",
        summary: "Validate the QA and publishing contract.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm the final QA expectations before the release-and-review test.",
          passingGuidance: "Review the publishing QA module if you miss this.",
          questions: [
            {
              question: "What should publishing QA confirm in this demo model?",
              options: [
                "That rendered pages and structured data stay aligned",
                "That every course is removed from the learning path",
                "That flash cards replace tests",
                "That the academy has only one path",
              ],
              correctAnswerIndex: 0,
              explanation: "Publishing QA should confirm that both human-facing and machine-facing surfaces are coherent.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      testDelivery: {
        id: "studio:test:delivery",
        templateId: "education.course-test",
        slug: "/academy/prompt-delivery-studio/release-and-review-ops/final-test/",
        title: "Course Test: Release And Review Ops",
        description: "Final assessment for the second course in the second learning path.",
        summary: "Validate release QA and publishing readiness.",
        order: 3,
        data: {
          eyebrow: "Course Test",
          intro: "Complete the release-and-review assessment after both modules and both quizzes.",
          readinessChecklist: [
            "Review the release checkpoints.",
            "Review the publishing QA model.",
            "Be ready to explain why delivery is a course-level outcome.",
          ],
          scoreSummary: "Passing shows that you can take a prompt system through review and publishing checks.",
          passingGuidance: "Use the course quizzes to review before retrying.",
          questions: [
            {
              question: "Which pair best describes the second course in this path?",
              options: [
                "Review checkpoints and publishing QA",
                "Only breadcrumbs and route labels",
                "Only flash cards and hover states",
                "Only the academy home page",
              ],
              correctAnswerIndex: 0,
              explanation: "The course is built around review sequencing and final publishing QA.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      courseGovernance: {
        id: "studio:course:governance",
        templateId: "education.course",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/",
        title: "Governance And Audit Rails",
        description: "Close the path with governance, auditability, and release traceability for prompt systems.",
        summary: "Add a third course so the learning path clearly spans several courses.",
        order: 3,
        data: {
          eyebrow: "Course 03",
          intro: "This course focuses on governance coverage, traceability, and audit-ready prompt delivery surfaces.",
          objectives: [
            "Map prompt delivery changes onto governed review rails.",
            "Verify auditability across content, runtime, and release surfaces.",
          ],
          prerequisites: ["Complete Release And Review Ops."],
          completionCriteria: "Finish both modules, both quizzes, and the final governance test.",
          testCallout: "Close the path with the governance and audit final test.",
          schemaKinds: ["Course", "CourseInstance"],
        },
      },
      flashcardsGovernance: {
        id: "studio:flashcards:governance",
        templateId: "education.flashcards",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/flashcards/",
        title: "Flash Cards: Governance And Audit Rails",
        description: "Optional flash cards for the governance course.",
        summary: "Recall governance and audit concepts before the course quizzes.",
        order: 1,
        data: {
          eyebrow: "Flash Cards",
          body: "Use these cards to rehearse governance and auditability ideas before assessment.",
          cards: [
            {
              question: "What does an audit rail preserve for prompt delivery?",
              answer: "Decision history, runtime evidence, and release-readiness proof.",
              explanation: "Auditability depends on retaining the chain from change to verification.",
            },
            {
              question: "Why teach governance at the course level?",
              answer: "Because auditability spans modules, assessments, and final release outcomes together.",
              explanation: "The governance layer is wider than any single lesson page.",
            },
          ],
          schemaKinds: ["LearningResource"],
        },
      },
      moduleClaims: {
        id: "studio:module:claims",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/claim-coverage/",
        title: "Claim Coverage And Traceability",
        description: "Map course outcomes to claims, checks, and verifiable release signals.",
        summary: "Use structured traceability to make the course auditable.",
        order: 1,
        data: {
          eyebrow: "Module 05",
          intro: "This lesson focuses on making prompt-system changes traceable through explicit claims and checks.",
          body: "A governed prompt-delivery lane should show how learning outcomes, release expectations, and runtime evidence connect. Claim coverage makes those relationships explicit and reviewable.",
          keyTakeaways: [
            "Claims connect course outcomes to verification surfaces.",
            "Traceability reduces ambiguity during review.",
            "Governed delivery should explain what was proven and how.",
          ],
          nextStep: "Return to the course page and continue into audit bundles.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizClaims: {
        id: "studio:quiz:claims",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/claim-coverage-quiz/",
        title: "Quiz: Claim Coverage",
        description: "Check understanding of claim-to-proof traceability.",
        summary: "Validate the traceability model.",
        order: 1,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm why claim coverage matters for governed prompt delivery.",
          passingGuidance: "Review the claim-coverage module if you miss this.",
          questions: [
            {
              question: "Why is claim coverage useful in a governed prompt-delivery course?",
              options: [
                "It connects expected outcomes to concrete proof surfaces",
                "It removes the need for final tests",
                "It replaces course navigation",
                "It hides release history",
              ],
              correctAnswerIndex: 0,
              explanation: "Claim coverage makes the path from expectation to proof explicit.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      moduleAudit: {
        id: "studio:module:audit",
        templateId: "education.module",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/audit-bundles/",
        title: "Audit Bundles And Release Evidence",
        description: "Assemble the audit artifacts needed for governed release.",
        summary: "Close the path with audit bundles and release evidence.",
        order: 2,
        data: {
          eyebrow: "Module 06",
          intro: "This lesson focuses on the audit bundle that proves a prompt system is ready to ship.",
          body: "An audit bundle should gather the course outputs, runtime checks, and release evidence into one reviewable package. That bundle is what makes final approval efficient and credible.",
          keyTakeaways: [
            "Audit bundles gather proof into one review surface.",
            "Release evidence should be packaged, not scattered.",
            "Governed delivery ends with a verifiable bundle.",
          ],
          nextStep: "Return to the course page and complete the audit quiz.",
          schemaKinds: ["TechArticle"],
        },
      },
      quizAudit: {
        id: "studio:quiz:audit",
        templateId: "education.quiz",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/audit-bundles-quiz/",
        title: "Quiz: Audit Bundles",
        description: "Check understanding of audit-ready release packaging.",
        summary: "Validate the audit-bundle concept.",
        order: 2,
        data: {
          eyebrow: "Quiz",
          intro: "Confirm the purpose of assembling one reviewable audit bundle.",
          passingGuidance: "Review the audit-bundle lesson if needed.",
          questions: [
            {
              question: "What is the purpose of an audit bundle in this path?",
              options: [
                "To gather course, runtime, and release proof into one review surface",
                "To replace the academy index",
                "To remove breadcrumbs",
                "To avoid structured data output",
              ],
              correctAnswerIndex: 0,
              explanation: "The bundle exists to make release evidence inspectable in one place.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
      testGovernance: {
        id: "studio:test:governance",
        templateId: "education.course-test",
        slug: "/academy/prompt-delivery-studio/governance-and-audit-rails/final-test/",
        title: "Course Test: Governance And Audit Rails",
        description: "Final assessment for the governance course.",
        summary: "Validate governance and audit readiness.",
        order: 3,
        data: {
          eyebrow: "Course Test",
          intro: "Complete the governance assessment after both modules and both quizzes.",
          readinessChecklist: [
            "Review claim coverage.",
            "Review audit bundles.",
            "Be ready to explain how the course proves release readiness.",
          ],
          scoreSummary: "Passing shows that you can carry prompt delivery through governance and audit closure.",
          passingGuidance: "Use the course quizzes if you need another pass before retrying.",
          questions: [
            {
              question: "Which pair best represents the final course in this learning path?",
              options: [
                "Claim coverage and audit bundles",
                "Only hover states and CSS chips",
                "Only root routes and breadcrumbs",
                "Only flash cards and no tests",
              ],
              correctAnswerIndex: 0,
              explanation: "The final course is about traceability and evidence packaging for audit closure.",
            },
          ],
          schemaKinds: ["WebPage"],
        },
      },
    },
    links: {
      learningPath: { courses: ["courseResearch", "courseDelivery", "courseGovernance"] },
      courseResearch: { modules: ["moduleSources", "moduleSynthesis"], flashcards: ["flashcardsResearch"], quizzes: ["quizSources", "quizSynthesis"], test: ["testResearch"] },
      moduleSources: { next: ["moduleSynthesis"] },
      moduleSynthesis: { previous: ["moduleSources"] },
      courseDelivery: { modules: ["moduleReview", "modulePublishing"], flashcards: ["flashcardsDelivery"], quizzes: ["quizReview", "quizPublishing"], test: ["testDelivery"] },
      moduleReview: { next: ["modulePublishing"] },
      modulePublishing: { previous: ["moduleReview"] },
      courseGovernance: { modules: ["moduleClaims", "moduleAudit"], flashcards: ["flashcardsGovernance"], quizzes: ["quizClaims", "quizAudit"], test: ["testGovernance"] },
      moduleClaims: { next: ["moduleAudit"] },
      moduleAudit: { previous: ["moduleClaims"] },
    },
  });
}

export function createLearningPathDemoSite(origin = DEFAULT_ORIGIN): LearningPathDemoSite {
  const primaryPreset = buildEducationPreset();
  const secondaryPreset = buildSecondEducationPreset();
  const primaryCompiled = compilePageTemplateGraph({ id: "learning-path-demo-primary", graph: primaryPreset.graph });
  const secondaryCompiled = compilePageTemplateGraph({ id: "learning-path-demo-secondary", graph: secondaryPreset.graph });
  const compiledPages = [...primaryCompiled.pages, ...secondaryCompiled.pages];
  const homePage = createDemoHomePage(origin, compiledPages);
  const academyIndexPage = createAcademyIndexPage(origin, compiledPages);
  const site = compileDemoSite({
    product: {
      name: "MdWrk Academy",
      slug: "mdwrk-academy",
      tagline: "Schema-backed learning experiences with first-class structured data.",
      description: "A demo academy showing how MdWrk Pages can model learning paths, courses, modules, quizzes, and course tests.",
      category: "EducationalApplication",
      canonicalUrl: origin
    },
    nav: {
      primary: [
        { label: "Academy", href: "/academy/" },
        { label: "Learning Path", href: "/academy/ai-learning-architect/" },
        { label: "Systems Course", href: "/academy/ai-learning-architect/learning-systems/" },
        { label: "Delivery Course", href: "/academy/ai-learning-architect/template-delivery/" }
      ]
    },
    footer: {
      links: [
        { label: "Schemas", href: "/academy/ai-learning-architect/" },
        { label: "Structured Data", href: "/academy/ai-learning-architect/template-delivery/rendering/" }
      ],
      note: "MdWrk Academy compiles education templates into a visible site and machine-readable graph from one source."
    },
    ai: {
      summary: "A demo academy for schema-backed learning path delivery.",
      coreFacts: [
        "Every education entity is schema-backed.",
        "Learning paths compile into real routes.",
        "Structured data and visible pages share the same compiled source."
      ]
    },
    pages: [homePage, academyIndexPage, ...compiledPages]
  });

  const templateLabelById = new Map([
    ["academy.index", "Academy"],
    ["education.learning-path", "Learning Path"],
    ["education.course", "Course"],
    ["education.flashcards", "Flash Cards"],
    ["education.module", "Module"],
    ["education.quiz", "Quiz"],
    ["education.course-test", "Course Test"]
  ]);
  const routeNodes = [
    {
      pageId: "demo:home",
      title: homePage.title,
      path: "/",
      templateId: "demo.home",
      templateLabel: "Home",
      summary: homePage.description,
    },
    {
      pageId: "academy:index",
      title: academyIndexPage.title,
      path: "/academy/",
      templateId: "academy.index",
      templateLabel: templateLabelById.get("academy.index") ?? "Academy",
      summary: academyIndexPage.description,
    },
    ...[...primaryCompiled.manifest.routes, ...secondaryCompiled.manifest.routes].map((route) => {
      const page = site.pageByPath.get(normalizeRouteSlug(route.slug));
      return {
        pageId: route.pageId,
        title: route.title,
        path: normalizeRouteSlug(route.slug),
        templateId: route.templateId,
        templateLabel: templateLabelById.get(route.templateId) ?? route.templateId,
        summary: page?.description ?? route.title
      };
    }),
  ];
  const schemaRegistry = listTemplateDataSchemas().map((entry) => ({
    templateId: entry.templateId,
    schemaId: entry.schemaId,
    assetPath: entry.assetPath
  }));
  const diagnostics = [
    ...primaryCompiled.diagnostics.map((item) => `${item.level}:${item.code}:${item.message}`),
    ...secondaryCompiled.diagnostics.map((item) => `${item.level}:${item.code}:${item.message}`),
    ...site.diagnostics.map((item) => `${item.level}:${item.code}:${item.message}`)
  ];

  return {
    site,
    pages: site.pages,
    routeNodes,
    schemaRegistry,
    diagnostics
  };
}
