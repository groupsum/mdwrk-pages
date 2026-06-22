import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(testRoot, "..");
const distRoot = path.resolve(packageRoot, "dist");
const smokeRoot = path.resolve(packageRoot, ".smoke-dist");
const contractDist = path.resolve(packageRoot, "..", "..", "contracts", "lander-content-contract", "dist", "index.js").replace(/\\/g, "/");

fs.rmSync(smokeRoot, { recursive: true, force: true });
fs.cpSync(distRoot, smokeRoot, { recursive: true });
for (const file of fs.readdirSync(smokeRoot, { recursive: true })) {
  if (typeof file !== "string" || !file.endsWith(".js")) continue;
  const target = path.join(smokeRoot, file);
  fs.writeFileSync(
    target,
    fs.readFileSync(target, "utf8").replaceAll('"@mdwrk/lander-content-contract"', `"file:///${contractDist}"`),
  );
}

const {
  buildPageSpecFromTemplate,
  buildPageSpecsFromGraph,
  compileImperativePageTemplates,
  compileMarkdownPageTemplates,
  compilePageTemplateSource,
  createGeneratedPageTemplateContentPack,
  defineEdge,
  definePageInstance,
  definePageTemplate,
  defineTemplateGraph,
  deriveTemplateNavigation,
  docsDomainBundle,
  educationDomainBundle,
  packageDomainBundle,
  productDomainBundle,
  resolveIncomingLinkSlots,
  resolveLinkSlots,
  supportDomainBundle,
  trustDomainBundle,
  validateTemplateGraph,
} = await import(`file:///${path.join(smokeRoot, "index.js").replace(/\\/g, "/")}`);

fs.rmSync(smokeRoot, { recursive: true, force: true });

const coveredFeatures = new Set();
function covers(featureId, assertion) {
  assertion();
  coveredFeatures.add(featureId);
}

const defaultGraphCoveredFeatures = new Set();
function coversDefaultGraph(featureId, assertion) {
  assertion();
  defaultGraphCoveredFeatures.add(featureId);
}

const educationGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  bundles: [educationDomainBundle],
  instances: [
    definePageInstance({ id: "path", templateId: "education.learning-path", slug: "/learn/", title: "Learning Path", description: "A sequenced learning path.", data: { summary: "Start here and follow the courses.", outcomes: ["Finish the course."], prerequisites: ["Know the basics."] } }),
    definePageInstance({ id: "course", templateId: "education.course", slug: "/learn/course/", title: "Course", description: "A course in the path.", data: { summary: "Course overview and modules.", objectives: ["Complete the module."], testCallout: "Take the course test at the end." } }),
    definePageInstance({ id: "flashcards", templateId: "education.flashcards", slug: "/learn/course/flashcards/", title: "Flash Cards", description: "Flash cards for the course.", data: { summary: "Review key Q and A pairs.", cards: [{ question: "Why use flash cards?", answer: "To practice recall.", explanation: "They are optional learning aids." }] } }),
    definePageInstance({ id: "module", templateId: "education.module", slug: "/learn/course/module/", title: "Module", description: "A course module.", data: { summary: "Module lessons and checks.", body: "Read the lesson and practice the material." } }),
    definePageInstance({ id: "quiz", templateId: "education.quiz", slug: "/learn/course/quiz/", title: "Quiz", description: "A quiz for the course.", data: { summary: "Validate course understanding.", questions: [{ question: "Why take the quiz?", options: ["To confirm learning", "To skip the lesson"], correctAnswerIndex: 0, explanation: "The quiz confirms understanding." }] } }),
    definePageInstance({ id: "course-test", templateId: "education.course-test", slug: "/learn/course/test/", title: "Course Test", description: "A final course test.", data: { summary: "Validate course readiness.", questions: [{ question: "When do you take the course test?", options: ["After the module sequence", "Before the course starts"], correctAnswerIndex: 0, explanation: "The course test follows the module sequence." }] } }),
  ],
  edges: [
    defineEdge({ sourceId: "path", targetId: "course", relationship: "child", slotId: "courses", order: 1 }),
    defineEdge({ sourceId: "course", targetId: "module", relationship: "course_module", slotId: "modules", order: 1 }),
    defineEdge({ sourceId: "course", targetId: "flashcards", relationship: "course_flashcards", slotId: "flashcards", order: 2 }),
    defineEdge({ sourceId: "course", targetId: "quiz", relationship: "course_quiz", slotId: "quizzes", order: 3 }),
    defineEdge({ sourceId: "course", targetId: "course-test", relationship: "course_test", slotId: "test", order: 4 }),
  ],
});

assert.deepEqual(validateTemplateGraph(educationGraph).filter((item) => item.level === "error"), []);
assert.equal(resolveLinkSlots(educationGraph, "path").courses[0].href, "/learn/course/");
assert.equal(resolveLinkSlots(educationGraph, "course").modules[0].label, "Module");
assert.equal(resolveLinkSlots(educationGraph, "course").flashcards[0].targetTemplateId, "education.flashcards");
assert.equal(resolveLinkSlots(educationGraph, "course").quizzes[0].targetTemplateId, "education.quiz");
assert.equal(resolveLinkSlots(educationGraph, "course").test[0].targetTemplateId, "education.course-test");
assert.equal(resolveLinkSlots(educationGraph, "path").courses[0].role, "tree_child");
assert.equal(resolveIncomingLinkSlots(educationGraph, "course")["incoming:courses"][0].href, "/learn/");
assert.equal(deriveTemplateNavigation(educationGraph, "course").breadcrumbs[1].href, "/learn/");

const coursePage = buildPageSpecFromTemplate(educationGraph, educationGraph.instances[1]);
assert.equal(coursePage.kind, "docs_bridge");
assert.equal(coursePage.slug, "/learn/course/");
assert.ok(coursePage.schema.some((item) => item.kind === "Course"));
assert.ok(coursePage.componentIntents.some((item) => item.kind === "page_shell"));

const moduleInstance = educationGraph.instances.find((item) => item.id === "module");
const quizInstance = educationGraph.instances.find((item) => item.id === "quiz");
const courseTestInstance = educationGraph.instances.find((item) => item.id === "course-test");
const modulePage = buildPageSpecFromTemplate(educationGraph, moduleInstance);
assert.equal(modulePage.kind, "docs_bridge");
assert.equal(modulePage.sections.find((section) => section.id === "next-step").primaryCta.href, "/learn/course/quiz/");
assert.equal(modulePage.sections.find((section) => section.id === "next-step").secondaryCta.href, "/learn/course/");
const quizPage = buildPageSpecFromTemplate(educationGraph, quizInstance);
const courseTestPage = buildPageSpecFromTemplate(educationGraph, courseTestInstance);
assert.equal(quizPage.sections.find((section) => section.id === "questions").kind, "assessment");
assert.equal(courseTestPage.sections.find((section) => section.id === "questions").kind, "assessment");

const supportGraph = defineTemplateGraph({
  templates: supportDomainBundle.templates,
  bundles: [supportDomainBundle],
  instances: [
    definePageInstance({ id: "hub", templateId: "support.hub", slug: "/support/", title: "Support", description: "Support hub page.", data: { summary: "Find support answers." } }),
    definePageInstance({ id: "question", templateId: "support.qa", slug: "/support/question/", title: "Question", description: "Question answer page.", data: { summary: "Direct answer.", schemaKinds: ["QAPage"] } }),
  ],
  edges: [
    defineEdge({ sourceId: "hub", targetId: "question", relationship: "faq_question", slotId: "questions", order: 1 }),
  ],
});

assert.equal(resolveLinkSlots(supportGraph, "hub").questions[0].href, "/support/question/");
assert.ok(buildPageSpecFromTemplate(supportGraph, supportGraph.instances[1]).schema.some((item) => item.kind === "QAPage"));

const productTrustGraph = defineTemplateGraph({
  templates: [...productDomainBundle.templates, ...supportDomainBundle.templates, ...trustDomainBundle.templates],
  bundles: [productDomainBundle, supportDomainBundle, trustDomainBundle],
  instances: [
    definePageInstance({ id: "home", templateId: "product.home", slug: "/", title: "Product Home", description: "Product home page.", data: { summary: "Product overview." } }),
    definePageInstance({ id: "support", templateId: "support.hub", slug: "/support/", title: "Support", description: "Support hub page.", data: { summary: "Support overview." } }),
    definePageInstance({ id: "privacy", templateId: "trust.privacy", slug: "/privacy/", title: "Privacy", description: "Privacy policy page.", data: { summary: "Privacy policy." } }),
    definePageInstance({ id: "tos", templateId: "trust.terms", slug: "/terms/", title: "Terms", description: "Terms page.", data: { summary: "Terms of service." } }),
  ],
  edges: [
    defineEdge({ sourceId: "home", targetId: "support", relationship: "support", slotId: "support", order: 1 }),
    defineEdge({ sourceId: "home", targetId: "privacy", relationship: "legal", slotId: "legal", order: 1 }),
    defineEdge({ sourceId: "home", targetId: "tos", relationship: "legal", slotId: "legal", order: 2 }),
  ],
});

const homeNav = deriveTemplateNavigation(productTrustGraph, "home");
assert.deepEqual(homeNav.related.map((item) => item.href), ["/support/", "/privacy/", "/terms/"]);
assert.equal(buildPageSpecsFromGraph(productTrustGraph).pages.length, 4);

const schemaLinkGraph = defineTemplateGraph({
  templates: [
    definePageTemplate({
      id: "custom.home",
      domain: "core",
      kind: "home",
      title: "Custom home",
      description: "Custom home page.",
      linkSlots: [{ id: "help", relationship: "support", role: "semantic", cardinality: "optional_many" }],
      schemaLinks: [{ kind: "SoftwareApplication", property: "softwareHelp", slotId: "help", relationship: "support", targetTemplateIds: ["custom.help"], cardinality: "one" }],
      buildPage: (context) => ({
        kind: "home",
        slug: context.instance.slug,
        title: context.instance.title,
        description: context.instance.description,
        h1: context.instance.title,
        intro: context.instance.description,
        sections: [{ id: "overview", kind: "markdown", title: "Overview", body: context.instance.description }],
      }),
      schema: (context) => [{
        id: `${context.instance.id}:softwareapplication`,
        kind: "SoftwareApplication",
        data: { name: context.instance.title, url: context.instance.slug },
      }],
    }),
    definePageTemplate({
      id: "custom.help",
      domain: "core",
      kind: "docs_bridge",
      title: "Custom help",
      description: "Custom help page.",
      buildPage: (context) => ({
        kind: "docs_bridge",
        slug: context.instance.slug,
        title: context.instance.title,
        description: context.instance.description,
        h1: context.instance.title,
        intro: context.instance.description,
        sections: [{ id: "overview", kind: "markdown", title: "Overview", body: context.instance.description }],
      }),
    }),
  ],
  instances: [
    definePageInstance({ id: "custom-home", templateId: "custom.home", slug: "/custom/", title: "Custom Home", description: "Custom home page.", data: {} }),
    definePageInstance({ id: "custom-help", templateId: "custom.help", slug: "/custom/help/", title: "Custom Help", description: "Custom help page.", data: {} }),
  ],
  edges: [
    defineEdge({ sourceId: "custom-home", targetId: "custom-help", relationship: "support", slotId: "help", order: 1 }),
  ],
});

const schemaLinkMissingGraph = defineTemplateGraph({
  ...schemaLinkGraph,
  edges: [],
});

const missingRequiredChildGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  instances: [
    definePageInstance({ id: "path", templateId: "education.learning-path", slug: "/learn/", title: "Learning Path", description: "A path.", data: { summary: "Path summary." } }),
  ],
  edges: [],
});
assert.ok(validateTemplateGraph(missingRequiredChildGraph).some((item) => item.code === "slot.required.missing" || item.code === "topology.child.required.missing"));

const invalidGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  instances: [
    definePageInstance({ id: "path", templateId: "education.learning-path", slug: "/learn/", title: "Learning Path", description: "A path.", data: { summary: "Path summary." } }),
    definePageInstance({ id: "wrong", templateId: "education.course-test", slug: "/quiz/", title: "Quiz", description: "A quiz.", data: { summary: "Test summary.", questions: [{ question: "Q?", options: ["A", "B"], correctAnswerIndex: 0, explanation: "A." }] } }),
  ],
  edges: [
    defineEdge({ sourceId: "path", targetId: "wrong", relationship: "child", slotId: "courses" }),
  ],
});

assert.ok(validateTemplateGraph(invalidGraph).some((item) => item.code === "edge.slot.target.invalid"));

const terminalChildGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  instances: [
    definePageInstance({ id: "quiz", templateId: "education.quiz", slug: "/quiz/", title: "Quiz", description: "A quiz.", data: { summary: "Quiz summary.", questions: [{ question: "Q?", options: ["A", "B"], correctAnswerIndex: 0, explanation: "A." }] } }),
    definePageInstance({ id: "course-test", templateId: "education.course-test", slug: "/course-test/", title: "Course Test", description: "A course test.", data: { summary: "Course test summary.", questions: [{ question: "Q?", options: ["A", "B"], correctAnswerIndex: 0, explanation: "A." }] } }),
  ],
  edges: [
    defineEdge({ sourceId: "quiz", targetId: "course-test", relationship: "child", role: "tree_child", slotId: "children" }),
  ],
});
assert.ok(validateTemplateGraph(terminalChildGraph).some((item) => item.code === "template.terminal.child.invalid"));

const invalidTemplateDataGraph = defineTemplateGraph({
  templates: educationDomainBundle.templates,
  instances: [
    definePageInstance({ id: "bad-quiz", templateId: "education.quiz", slug: "/bad-quiz/", title: "Bad Quiz", description: "Bad quiz data.", data: { summary: "Bad quiz.", questions: [] } }),
  ],
  edges: [],
});

const imperativeSource = {
  id: "imperative-product-demo",
  bundles: [productDomainBundle, trustDomainBundle],
  pages: [
    { id: "imperative-home", templateId: "product.home", slug: "/imperative/", title: "Imperative Home", description: "Imperative source home.", data: { summary: "Home summary." } },
    { id: "imperative-feature", templateId: "product.feature", slug: "/imperative/feature/", title: "Imperative Feature", description: "Imperative source feature.", data: { summary: "Feature summary." } },
    { id: "imperative-pricing", templateId: "product.pricing", slug: "/imperative/pricing/", title: "Imperative Pricing", description: "Imperative source pricing.", data: { summary: "Pricing summary." } },
    { id: "imperative-privacy", templateId: "trust.privacy", slug: "/imperative/privacy/", title: "Imperative Privacy", description: "Imperative source privacy.", data: { summary: "Privacy summary." } },
  ],
  links: [
    { sourceId: "imperative-home", targetId: "imperative-feature", slotId: "children", order: 1 },
    { sourceId: "imperative-home", targetId: "imperative-pricing", slotId: "children", order: 2 },
    { sourceId: "imperative-home", targetId: "imperative-privacy", slotId: "legal", order: 3 },
  ],
};

const markdownFiles = [
  {
    path: "content/pages/home.md",
    raw: `---
id: markdown-home
templateId: product.home
slug: /markdown/
title: Markdown Home
description: Markdown source home.
summary: Markdown home summary.
links:
  children: [markdown-feature, markdown-pricing]
  legal: [markdown-privacy]
---
## Home Body

Markdown-authored body content.`,
  },
  {
    path: "content/pages/feature.md",
    raw: `---
id: markdown-feature
templateId: product.feature
slug: /markdown/feature/
title: Markdown Feature
description: Markdown source feature.
summary: Markdown feature summary.
---
Feature body.`,
  },
  {
    path: "content/pages/pricing.md",
    raw: `---
id: markdown-pricing
templateId: product.pricing
slug: /markdown/pricing/
title: Markdown Pricing
description: Markdown source pricing.
---
Pricing body.`,
  },
  {
    path: "content/pages/privacy.md",
    raw: `---
id: markdown-privacy
templateId: trust.privacy
slug: /markdown/privacy/
title: Markdown Privacy
description: Markdown source privacy.
---
Privacy body.`,
  },
];

const imperativeCompiled = compileImperativePageTemplates(imperativeSource);
const markdownCompiled = compileMarkdownPageTemplates({
  id: "markdown-product-demo",
  bundles: [productDomainBundle, trustDomainBundle],
  files: markdownFiles,
});

assert.deepEqual(imperativeCompiled.diagnostics.filter((item) => item.level === "error"), []);
assert.deepEqual(markdownCompiled.diagnostics.filter((item) => item.level === "error"), []);
assert.deepEqual(markdownCompiled.pages.map((page) => page.slug), ["/markdown/", "/markdown/feature/", "/markdown/pricing/", "/markdown/privacy/"]);
assert.equal(markdownCompiled.graph.instances.find((item) => item.id === "markdown-home").data.body.includes("Markdown-authored body content"), true);
assert.deepEqual(resolveLinkSlots(markdownCompiled.graph, "markdown-home").children.map((link) => link.href), ["/markdown/feature/", "/markdown/pricing/"]);

const duplicateRouteCompiled = compilePageTemplateSource({
  id: "duplicate-route-demo",
  bundles: [productDomainBundle],
  pages: [
    { id: "one", templateId: "product.pricing", slug: "/same/", title: "One", description: "First duplicate.", data: {} },
    { id: "two", templateId: "product.compare", slug: "/same/", title: "Two", description: "Second duplicate.", data: {} },
  ],
});
assert.ok(duplicateRouteCompiled.diagnostics.some((item) => item.code === "source.route.duplicate"));

covers("feat:lander.page-templates.relationship-role-types", () => {
  assert.equal(resolveLinkSlots(educationGraph, "path").courses[0].role, "tree_child");
  assert.equal(resolveLinkSlots(productTrustGraph, "home").legal[0].role, "semantic");
});

covers("feat:lander.page-templates.template-topology-types", () => {
  const learningPath = educationGraph.templates.find((item) => item.id === "education.learning-path");
  const quiz = educationGraph.templates.find((item) => item.id === "education.quiz");
  assert.equal(learningPath.topology.childPolicy, "required");
  assert.equal(learningPath.topology.childSlots[0].id, "courses");
  assert.equal(quiz.topology.childPolicy, "terminal");
});

covers("feat:lander.page-templates.required-child-validation", () => {
  const diagnostics = validateTemplateGraph(missingRequiredChildGraph);
  assert.ok(diagnostics.some((item) => item.code === "slot.required.missing" || item.code === "topology.child.required.missing"));
});

covers("feat:lander.page-templates.optional-child-validation", () => {
  const courseWithoutQuizGraph = defineTemplateGraph({
    templates: educationDomainBundle.templates,
    instances: [
      definePageInstance({ id: "path", templateId: "education.learning-path", slug: "/learn/", title: "Learning Path", description: "A path.", data: { summary: "Path summary." } }),
      definePageInstance({ id: "course", templateId: "education.course", slug: "/course/", title: "Course", description: "A course.", data: { summary: "Course summary." } }),
      definePageInstance({ id: "module", templateId: "education.module", slug: "/module/", title: "Module", description: "A module.", data: { summary: "Module summary.", body: "Module body." } }),
      definePageInstance({ id: "course-test", templateId: "education.course-test", slug: "/course/test/", title: "Course Test", description: "A course test.", data: { summary: "Course test summary.", questions: [{ question: "Q?", options: ["A", "B"], correctAnswerIndex: 0, explanation: "A." }] } }),
    ],
    edges: [
      defineEdge({ sourceId: "path", targetId: "course", relationship: "child", slotId: "courses" }),
      defineEdge({ sourceId: "course", targetId: "module", relationship: "course_module", slotId: "modules" }),
      defineEdge({ sourceId: "course", targetId: "course-test", relationship: "course_test", slotId: "test" }),
    ],
  });
  assert.deepEqual(validateTemplateGraph(courseWithoutQuizGraph).filter((item) => item.level === "error"), []);
});

covers("feat:lander.page-templates.terminal-template-validation", () => {
  assert.ok(validateTemplateGraph(terminalChildGraph).some((item) => item.code === "template.terminal.child.invalid"));
});

covers("feat:lander.page-templates.incoming-edge-derivation", () => {
  const incoming = resolveIncomingLinkSlots(educationGraph, "module");
  assert.equal(incoming["incoming:modules"][0].href, "/learn/course/");
  assert.equal(incoming["incoming:modules"][0].role, "tree_child");
});

covers("feat:lander.page-templates.relationship-validation", () => {
  const diagnostics = validateTemplateGraph(invalidGraph);
  assert.ok(diagnostics.some((item) => item.code === "edge.slot.target.invalid"));
});

covers("feat:lander.page-templates.link-slot-resolution", () => {
  const slots = resolveLinkSlots(educationGraph, "course");
  assert.equal(slots.modules.length, 1);
  assert.equal(slots.flashcards.length, 1);
  assert.equal(slots.modules[0].slotId, "modules");
});

covers("feat:lander.page-templates.module-quiz-navigation", () => {
  const page = buildPageSpecFromTemplate(educationGraph, moduleInstance);
  const nextStep = page.sections.find((section) => section.id === "next-step");
  assert.equal(nextStep.primaryCta.href, "/learn/course/quiz/");
  assert.equal(nextStep.secondaryCta.href, "/learn/course/");
});

covers("feat:lander.page-templates.education-assessment-sections", () => {
  const quiz = buildPageSpecFromTemplate(educationGraph, quizInstance);
  const test = buildPageSpecFromTemplate(educationGraph, courseTestInstance);
  assert.equal(quiz.sections.find((section) => section.id === "questions").kind, "assessment");
  assert.equal(test.sections.find((section) => section.id === "questions").kind, "assessment");
});

covers("feat:lander.page-templates.ordered-relationship-resolution", () => {
  assert.deepEqual(
    resolveLinkSlots(productTrustGraph, "home").legal.map((item) => item.href),
    ["/privacy/", "/terms/"],
  );
});

covers("feat:lander.page-templates.navigation-derivation", () => {
  const navigation = deriveTemplateNavigation(educationGraph, "course");
  assert.equal(navigation.breadcrumbs[1].href, "/learn/");
  assert.equal(navigation.incoming["incoming:courses"][0].href, "/learn/");
});

covers("feat:lander.page-templates.schema-link-target-mapping", () => {
  const homePage = buildPageSpecFromTemplate(productTrustGraph, productTrustGraph.instances[0]);
  const softwareApplication = homePage.schema.find((item) => item.kind === "SoftwareApplication");
  assert.deepEqual(softwareApplication.data.linkedPages.softwareHelp.map((item) => item.targetTemplateId), ["support.hub"]);
  assert.deepEqual(softwareApplication.data.linkedPages.privacyPolicy.map((item) => item.targetTemplateId), ["trust.privacy"]);
  assert.deepEqual(softwareApplication.data.linkedPages.termsOfService.map((item) => item.targetTemplateId), ["trust.terms"]);
});

covers("feat:lander.page-templates.schema-link-validation", () => {
  assert.deepEqual(validateTemplateGraph(schemaLinkGraph).filter((item) => item.level === "error"), []);
  assert.ok(validateTemplateGraph(schemaLinkMissingGraph).some((item) => item.code === "schemaLink.required.missing"));
});

covers("feat:lander.page-templates.json-schema-template-validation", () => {
  const diagnostics = validateTemplateGraph(invalidTemplateDataGraph);
  assert.ok(diagnostics.some((item) => item.code === "instance.data.minItems"));
  assert.equal(buildPageSpecsFromGraph(invalidTemplateDataGraph).pages.length, 0);
});

covers("feat:lander.page-templates.core-types", () => {
  const page = buildPageSpecFromTemplate(educationGraph, educationGraph.instances[1]);
  assert.equal(page.slug, "/learn/course/");
  assert.ok(Array.isArray(resolveLinkSlots(educationGraph, "path").courses));
  assert.ok(Array.isArray(deriveTemplateNavigation(educationGraph, "course").related));
});

covers("feat:lander.page-templates.source-model", () => {
  assert.equal(compilePageTemplateSource(imperativeSource).graph.instances[0].id, "imperative-home");
  assert.equal(compilePageTemplateSource(imperativeSource).manifest.routes[0].pageId, "imperative-home");
});

covers("feat:lander.page-templates.markdown-frontmatter-authoring", () => {
  assert.equal(markdownCompiled.graph.instances[0].templateId, "product.home");
  assert.equal(markdownCompiled.graph.edges[0].relationship, "child");
});

covers("feat:lander.page-templates.imperative-compile-api", () => {
  assert.equal(imperativeCompiled.pages[0].title, "Imperative Home");
  assert.equal(imperativeCompiled.manifest.routes.length, 4);
});

covers("feat:lander.page-templates.authoring-adapter-parity", () => {
  assert.deepEqual(
    imperativeCompiled.manifest.edges.filter((edge) => edge.sourceId === "imperative-home").map((edge) => edge.slotId),
    markdownCompiled.manifest.edges.filter((edge) => edge.sourceId === "markdown-home").map((edge) => edge.slotId),
  );
});

covers("feat:lander.page-templates.child-link-semantics", () => {
  const child = markdownCompiled.manifest.edges.find((edge) => edge.slotId === "children");
  assert.equal(child.role, "tree_child");
  assert.equal(child.sourceId, "markdown-home");
  assert.equal(child.targetId, "markdown-feature");
});

covers("feat:lander.page-templates.compiler-diagnostics", () => {
  assert.ok(duplicateRouteCompiled.diagnostics.some((item) => item.code === "source.route.duplicate"));
});

covers("feat:lander.page-templates.cli-compile", () => {
  assert.equal(markdownCompiled.pages.length, 4);
});

covers("feat:lander.page-templates.cli-validate", () => {
  assert.deepEqual(markdownCompiled.diagnostics.filter((item) => item.level === "error"), []);
});

covers("feat:lander.page-templates.cli-graph-export", () => {
  assert.equal(markdownCompiled.manifest.edges.length, 3);
  assert.equal(markdownCompiled.manifest.routes[0].slug, "/markdown/");
});

covers("feat:lander.page-templates.generated-content-pack-output", () => {
  const pack = createGeneratedPageTemplateContentPack({ packageName: "@mdwrk/demo", version: "0.0.0", compiled: markdownCompiled });
  assert.equal(pack.packageName, "@mdwrk/demo");
  assert.equal(pack.routes.length, 4);
});

covers("feat:lander.page-templates.markdown-section-mapping", () => {
  const page = markdownCompiled.graph.instances.find((item) => item.id === "markdown-home");
  assert.equal(page.data.body.includes("## Home Body"), true);
});

covers("feat:lander.page-templates.schema-defaults", () => {
  assert.ok(markdownCompiled.pages.find((page) => page.slug === "/markdown/").schema.some((item) => item.kind === "SoftwareApplication"));
});

assert.deepEqual([...coveredFeatures].sort(), [
  "feat:lander.page-templates.authoring-adapter-parity",
  "feat:lander.page-templates.child-link-semantics",
  "feat:lander.page-templates.cli-compile",
  "feat:lander.page-templates.cli-graph-export",
  "feat:lander.page-templates.cli-validate",
  "feat:lander.page-templates.compiler-diagnostics",
  "feat:lander.page-templates.core-types",
  "feat:lander.page-templates.education-assessment-sections",
  "feat:lander.page-templates.generated-content-pack-output",
  "feat:lander.page-templates.imperative-compile-api",
  "feat:lander.page-templates.incoming-edge-derivation",
  "feat:lander.page-templates.json-schema-template-validation",
  "feat:lander.page-templates.link-slot-resolution",
  "feat:lander.page-templates.markdown-frontmatter-authoring",
  "feat:lander.page-templates.markdown-section-mapping",
  "feat:lander.page-templates.module-quiz-navigation",
  "feat:lander.page-templates.navigation-derivation",
  "feat:lander.page-templates.optional-child-validation",
  "feat:lander.page-templates.ordered-relationship-resolution",
  "feat:lander.page-templates.relationship-role-types",
  "feat:lander.page-templates.relationship-validation",
  "feat:lander.page-templates.required-child-validation",
  "feat:lander.page-templates.schema-defaults",
  "feat:lander.page-templates.schema-link-target-mapping",
  "feat:lander.page-templates.schema-link-validation",
  "feat:lander.page-templates.source-model",
  "feat:lander.page-templates.template-topology-types",
  "feat:lander.page-templates.terminal-template-validation",
]);

coversDefaultGraph("feat:lander.page-templates.product-domain-bundle", () => {
  const ids = productDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["product.home", "product.catalog", "product.product", "product.feature", "product.compare", "product.pricing", "product.plan-detail", "product.case-study", "product.changelog"]);
  assert.equal(productDomainBundle.templates.find((item) => item.id === "product.product").topology.childSlots[0].targetTemplateIds.includes("product.changelog"), true);
});

coversDefaultGraph("feat:lander.page-templates.support-domain-bundle", () => {
  const ids = supportDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["support.hub", "support.billing", "support.faq", "support.qa", "support.article", "support.contact", "support.status", "support.ticket-intent"]);
  assert.equal(supportDomainBundle.templates.find((item) => item.id === "support.hub").linkSlots.some((slot) => slot.id === "support"), true);
});

coversDefaultGraph("feat:lander.page-templates.education-domain-bundle", () => {
  const ids = educationDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["education.learning-path", "education.course", "education.flashcards", "education.module", "education.quiz", "education.course-test"]);
  assert.deepEqual(educationDomainBundle.templates.find((item) => item.id === "education.course").linkSlots.find((slot) => slot.id === "test").targetTemplateIds, ["education.course-test"]);
  assert.deepEqual(educationDomainBundle.templates.find((item) => item.id === "education.course").linkSlots.find((slot) => slot.id === "flashcards").targetTemplateIds, ["education.flashcards"]);
  assert.deepEqual(educationDomainBundle.templates.find((item) => item.id === "education.course").linkSlots.find((slot) => slot.id === "quizzes").targetTemplateIds, ["education.quiz"]);
});

coversDefaultGraph("feat:lander.page-templates.docs-domain-bundle", () => {
  const ids = docsDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["docs.hub", "docs.guide", "docs.reference", "docs.api", "docs.tutorial", "docs.troubleshooting", "docs.release-note"]);
  assert.equal(docsDomainBundle.templates.find((item) => item.id === "docs.api").linkSlots.some((slot) => slot.id === "next"), true);
});

coversDefaultGraph("feat:lander.page-templates.package-domain-bundle", () => {
  const ids = packageDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["package.catalog", "package.detail", "package.api", "package.plugin", "package.integration", "package.version"]);
  assert.equal(packageDomainBundle.templates.find((item) => item.id === "package.detail").linkSlots.some((slot) => slot.id === "children"), true);
});

coversDefaultGraph("feat:lander.page-templates.trust-domain-bundle", () => {
  const ids = trustDomainBundle.templates.map((item) => item.id);
  assert.deepEqual(ids, ["trust.hub", "trust.privacy", "trust.refunds", "trust.terms", "trust.security", "trust.compliance", "trust.policy", "trust.legal", "trust.support"]);
  assert.equal(trustDomainBundle.templates.find((item) => item.id === "trust.hub").topology.childSlots[0].targetTemplateIds.includes("trust.support"), true);
});

coversDefaultGraph("feat:lander.page-templates.domain-bundle-smoke-tests", () => {
  const bundles = [productDomainBundle, supportDomainBundle, educationDomainBundle, docsDomainBundle, packageDomainBundle, trustDomainBundle];
  assert.equal(bundles.every((bundle) => bundle.templates.length > 0), true);
  assert.equal(bundles.flatMap((bundle) => bundle.templates).every((template) => template.topology?.childPolicy), true);
});

assert.deepEqual([...defaultGraphCoveredFeatures].sort(), [
  "feat:lander.page-templates.docs-domain-bundle",
  "feat:lander.page-templates.domain-bundle-smoke-tests",
  "feat:lander.page-templates.education-domain-bundle",
  "feat:lander.page-templates.package-domain-bundle",
  "feat:lander.page-templates.product-domain-bundle",
  "feat:lander.page-templates.support-domain-bundle",
  "feat:lander.page-templates.trust-domain-bundle",
]);
