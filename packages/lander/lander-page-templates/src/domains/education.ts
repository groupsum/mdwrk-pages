import type { SchemaSpec } from "@mdwrk/lander-content-contract";
import { defineTemplateBundle, definePageTemplate } from "../define.js";
import type { PageTemplate, ResolvedTemplateLink, TemplateRenderContext } from "../types.js";

interface EducationFaqItem {
  question: string;
  answer: string;
}

interface EducationQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

interface LearningPathTemplateData extends Record<string, unknown> {
  eyebrow?: string;
  intro?: string;
  summary: string;
  body?: string;
  outcomes?: string[];
  prerequisites?: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  estimatedDuration?: string;
  metadata?: Record<string, unknown>;
  faq?: EducationFaqItem[];
  schemaKinds?: SchemaSpec["kind"][];
}

interface CourseTemplateData extends Record<string, unknown> {
  eyebrow?: string;
  intro?: string;
  summary: string;
  body?: string;
  objectives?: string[];
  prerequisites?: string[];
  status?: "not_started" | "in_progress" | "completed";
  completionCriteria?: string;
  testCallout?: string;
  metadata?: Record<string, unknown>;
  faq?: EducationFaqItem[];
  schemaKinds?: SchemaSpec["kind"][];
}

interface ModuleTemplateData extends Record<string, unknown> {
  eyebrow?: string;
  intro?: string;
  summary: string;
  body: string;
  keyTakeaways?: string[];
  status?: "not_started" | "in_progress" | "completed";
  nextStep?: string;
  faq?: EducationFaqItem[];
  schemaKinds?: SchemaSpec["kind"][];
}

interface QuizTemplateData extends Record<string, unknown> {
  eyebrow?: string;
  intro?: string;
  summary: string;
  body?: string;
  passingGuidance?: string;
  questions: EducationQuestion[];
  faq?: EducationFaqItem[];
  schemaKinds?: SchemaSpec["kind"][];
}

interface CourseTestTemplateData extends Record<string, unknown> {
  eyebrow?: string;
  intro?: string;
  summary: string;
  body?: string;
  readinessChecklist?: string[];
  scoreSummary?: string;
  passingGuidance?: string;
  questions: EducationQuestion[];
  faq?: EducationFaqItem[];
  schemaKinds?: SchemaSpec["kind"][];
}

function heroSection(title: string, subtitle: string, eyebrow?: string) {
  return {
    id: "hero",
    kind: "hero" as const,
    eyebrow,
    title,
    subtitle,
  };
}

function listMarkdown(title: string, items: string[], emptyCopy: string): string {
  if (!items.length) return emptyCopy;
  return items.map((item) => `- ${item}`).join("\n");
}

function questionsMarkdown(questions: EducationQuestion[]): string {
  return questions.map((question, index) => {
    const options = question.options.map((option, optionIndex) => `${optionIndex + 1}. ${option}`).join("\n");
    return `### Question ${index + 1}\n\n${question.question}\n\n${options}\n\nAnswer: ${question.correctAnswerIndex + 1}\n\n${question.explanation}`;
  }).join("\n\n");
}

function schemaKindsWithFallback(kinds: SchemaSpec["kind"][] | undefined, fallbackKinds: SchemaSpec["kind"][]): SchemaSpec["kind"][] {
  return kinds?.length ? kinds : fallbackKinds;
}

function linkedPageItems(context: TemplateRenderContext<Record<string, unknown>>, slotId: string) {
  return (context.links[slotId] ?? []).map((link) => ({
    name: link.label,
    url: link.href,
  }));
}

function educationSchema(
  context: TemplateRenderContext<Record<string, unknown>>,
  fallbackKinds: SchemaSpec["kind"][],
): SchemaSpec[] {
  const kinds = schemaKindsWithFallback(context.instance.data.schemaKinds as SchemaSpec["kind"][] | undefined, fallbackKinds);
  return kinds.map((kind) => {
    if (kind === "ItemList") {
      const items = linkedPageItems(context, "courses");
      return {
        id: `${context.instance.id}:itemlist`,
        kind,
        data: {
          name: context.instance.title,
          description: context.instance.description,
          url: context.instance.slug,
          items,
        },
      };
    }
    return {
      id: `${context.instance.id}:${String(kind).toLowerCase()}`,
      kind,
      data: {
        name: context.instance.title,
        description: context.instance.description,
        url: context.instance.slug,
      },
    };
  });
}

function assessmentSchema<TData extends QuizTemplateData | CourseTestTemplateData>(
  context: TemplateRenderContext<TData>,
): SchemaSpec[] {
  const kinds = schemaKindsWithFallback(context.instance.data.schemaKinds as SchemaSpec["kind"][] | undefined, ["Quiz"]);
  return kinds.map((kind) => {
    if (kind === "Quiz") {
      return {
        id: `${context.instance.id}:quiz`,
        kind,
        data: {
          name: context.instance.title,
          description: context.instance.description,
          url: context.instance.slug,
          hasPart: context.instance.data.questions.map((question) => ({
            name: question.question,
            eduQuestionType: "Flashcard",
            acceptedAnswer: {
              text: question.options[question.correctAnswerIndex] ?? question.explanation,
            },
            suggestedAnswer: question.options
              .filter((_, index) => index !== question.correctAnswerIndex)
              .map((option) => ({ text: option })),
            answerCount: question.options.length,
          })),
        },
      };
    }
    return {
      id: `${context.instance.id}:${String(kind).toLowerCase()}`,
      kind,
      data: {
        name: context.instance.title,
        description: context.instance.description,
        url: context.instance.slug,
      },
    };
  });
}

function parentCourseLink(context: TemplateRenderContext<Record<string, unknown>>): ResolvedTemplateLink | undefined {
  return context.navigation.incoming["incoming:modules"]?.[0];
}

function courseOwnedQuizForModule(context: TemplateRenderContext<Record<string, unknown>>): ResolvedTemplateLink | undefined {
  const parentCourse = parentCourseLink(context);
  if (!parentCourse) return undefined;

  const moduleOrder = Number(context.instance.order ?? 0);
  const courseQuizEdges = context.graph.edges
    .filter((edge) => edge.sourceId === parentCourse.targetId && edge.relationship === "course_quiz")
    .sort((left, right) => (left.order ?? 0) - (right.order ?? 0));

  if (!courseQuizEdges.length) return undefined;

  const matchedQuizEdge = courseQuizEdges.find((edge) => Number(edge.order ?? 0) === moduleOrder) ?? courseQuizEdges[0];
  const quizLink = context.links.parentCourseQuizzes?.find((link) => link.targetId === matchedQuizEdge.targetId);
  if (quizLink) return quizLink;

  const quizInstance = context.graph.instances.find((instance) => instance.id === matchedQuizEdge.targetId);
  if (!quizInstance) return undefined;

  return {
    id: matchedQuizEdge.id ?? `${matchedQuizEdge.sourceId}:${matchedQuizEdge.relationship}:${matchedQuizEdge.targetId}`,
    sourceId: context.instance.id,
    targetId: quizInstance.id,
    relationship: "related",
    role: "navigation",
    slotId: "parentCourseQuizzes",
    href: quizInstance.href ?? quizInstance.slug,
    label: matchedQuizEdge.label ?? quizInstance.label ?? quizInstance.title,
    order: matchedQuizEdge.order ?? quizInstance.order ?? 0,
    targetTemplateId: quizInstance.templateId,
  };
}

const learningPathTemplate: PageTemplate<LearningPathTemplateData> = definePageTemplate({
  id: "education.learning-path",
  domain: "education",
  kind: "docs_bridge",
  title: "Learning path",
  description: "Learning path hub page.",
  dataSchemaId: "https://schemas.mdwrk.com/lander/page-template/education/learning-path.schema.json",
  linkSlots: [{ id: "courses", relationship: "child", role: "tree_child", targetTemplateIds: ["education.course"], cardinality: "many", ordered: true }],
  topology: { childPolicy: "required", childSlots: [{ id: "courses", relationship: "child", targetTemplateIds: ["education.course"], min: 1, ordered: true }] },
  buildPage: (context) => {
    const data = context.instance.data;
    return {
      kind: "docs_bridge",
      slug: context.instance.slug,
      title: context.instance.title,
      description: context.instance.description,
      h1: context.instance.title,
      intro: data.intro ?? data.summary,
      sections: [
        heroSection(context.instance.title, data.summary, data.eyebrow),
        {
          id: "outcomes",
          kind: "feature_detail",
          title: "Outcomes",
          body: listMarkdown("Outcomes", data.outcomes ?? [], data.body ?? data.summary),
        },
        {
          id: "prerequisites",
          kind: "markdown",
          title: "Prerequisites",
          body: listMarkdown("Prerequisites", data.prerequisites ?? [], "No prerequisites supplied."),
        },
        {
          id: "courses",
          kind: "feature_grid",
          title: "Courses",
          items: (context.links.courses ?? []).map((link) => ({
            title: link.label,
            description: `${link.targetTemplateId} page`,
            href: link.href,
          })),
        },
      ],
      faq: data.faq,
    };
  },
  schema: (context) => educationSchema(context as TemplateRenderContext<Record<string, unknown>>, ["ItemList"]),
});

const courseTemplate: PageTemplate<CourseTemplateData> = definePageTemplate({
  id: "education.course",
  domain: "education",
  kind: "docs_bridge",
  title: "Course page",
  description: "Course overview page.",
  dataSchemaId: "https://schemas.mdwrk.com/lander/page-template/education/course.schema.json",
  linkSlots: [
    { id: "parent", relationship: "parent", role: "navigation", cardinality: "optional_one" },
    { id: "modules", relationship: "course_module", role: "tree_child", targetTemplateIds: ["education.module"], cardinality: "many", ordered: true },
    { id: "quizzes", relationship: "course_quiz", role: "tree_child", targetTemplateIds: ["education.quiz"], cardinality: "optional_many", ordered: true },
    { id: "test", relationship: "course_test", role: "tree_child", targetTemplateIds: ["education.course-test"], cardinality: "one", ordered: true },
  ],
  topology: {
    childPolicy: "required",
    childSlots: [
      { id: "modules", relationship: "course_module", targetTemplateIds: ["education.module"], min: 1, ordered: true },
      { id: "quizzes", relationship: "course_quiz", targetTemplateIds: ["education.quiz"], min: 0, ordered: true },
      { id: "test", relationship: "course_test", targetTemplateIds: ["education.course-test"], min: 1, max: 1, ordered: true },
    ],
  },
  buildPage: (context) => {
    const data = context.instance.data;
    const courseTest = context.links.test?.[0];
    return {
      kind: "docs_bridge",
      slug: context.instance.slug,
      title: context.instance.title,
      description: context.instance.description,
      h1: context.instance.title,
      intro: data.intro ?? data.summary,
      sections: [
        heroSection(context.instance.title, data.summary, data.eyebrow),
        {
          id: "objectives",
          kind: "feature_detail",
          title: "Learning objectives",
          body: listMarkdown("Objectives", data.objectives ?? [], data.body ?? data.summary),
        },
        {
          id: "prerequisites",
          kind: "markdown",
          title: "Prerequisites",
          body: listMarkdown("Prerequisites", data.prerequisites ?? [], "No prerequisites supplied."),
        },
        {
          id: "modules",
          kind: "feature_grid",
          title: "Modules",
          items: (context.links.modules ?? []).map((link) => ({
            title: link.label,
            description: `${link.targetTemplateId} page`,
            href: link.href,
          })),
        },
        {
          id: "quizzes",
          kind: "feature_grid",
          title: "Quizzes",
          items: (context.links.quizzes ?? []).map((link) => ({
            title: link.label,
            description: `${link.targetTemplateId} page`,
            href: link.href,
          })),
        },
        {
          id: "course-test",
          kind: "cta",
          title: "Final assessment",
          body: data.testCallout ?? "Complete the course test when you finish the modules.",
          primaryCta: courseTest ? { label: courseTest.label, href: courseTest.href, variant: "primary" } : undefined,
        },
      ],
      faq: data.faq,
    };
  },
  schema: (context) => educationSchema(context as TemplateRenderContext<Record<string, unknown>>, ["Course"]),
});

const moduleTemplate: PageTemplate<ModuleTemplateData> = definePageTemplate({
  id: "education.module",
  domain: "education",
  kind: "docs_bridge",
  title: "Module page",
  description: "Course module page.",
  dataSchemaId: "https://schemas.mdwrk.com/lander/page-template/education/module.schema.json",
  linkSlots: [
    { id: "parent", relationship: "parent", role: "navigation", cardinality: "optional_one" },
    { id: "parentCourseQuizzes", relationship: "related", role: "navigation", targetTemplateIds: ["education.quiz"], cardinality: "optional_many", ordered: true },
    { id: "previous", relationship: "previous", role: "navigation", cardinality: "optional_one" },
    { id: "next", relationship: "next", role: "navigation", cardinality: "optional_one" },
  ],
  topology: { childPolicy: "optional" },
  buildPage: (context) => {
    const data = context.instance.data;
    const quizLink = courseOwnedQuizForModule(context as TemplateRenderContext<Record<string, unknown>>);
    const courseLink = parentCourseLink(context as TemplateRenderContext<Record<string, unknown>>);
    return {
      kind: "docs_bridge",
      slug: context.instance.slug,
      title: context.instance.title,
      description: context.instance.description,
      h1: context.instance.title,
      intro: data.intro ?? data.summary,
      sections: [
        heroSection(context.instance.title, data.summary, data.eyebrow),
        {
          id: "lesson",
          kind: "markdown",
          title: "Lesson",
          body: data.body,
        },
        {
          id: "takeaways",
          kind: "feature_detail",
          title: "Key takeaways",
          body: listMarkdown("Key takeaways", data.keyTakeaways ?? [], data.nextStep ?? "No key takeaways supplied."),
        },
        {
          id: "next-step",
          kind: "cta",
          title: "Next step",
          body: data.nextStep ?? "Return to the course page to continue into the related quiz or the next module.",
          primaryCta: quizLink ? { label: quizLink.label, href: quizLink.href, variant: "primary" } : undefined,
          secondaryCta: courseLink ? { label: courseLink.label, href: courseLink.href, variant: "secondary" } : undefined,
        },
      ],
      faq: data.faq,
    };
  },
  schema: (context) => educationSchema(context as TemplateRenderContext<Record<string, unknown>>, ["TechArticle"]),
});

function assessmentPage<TData extends QuizTemplateData | CourseTestTemplateData>(
  context: TemplateRenderContext<TData>,
  title: string,
  bodyPrefix: string,
) {
  const data = context.instance.data;
  return {
    kind: "answer" as const,
    slug: context.instance.slug,
    title: context.instance.title,
    description: context.instance.description,
    h1: context.instance.title,
    intro: data.intro ?? data.summary,
    sections: [
      heroSection(context.instance.title, data.summary, data.eyebrow),
      {
        id: "intro",
        kind: "markdown" as const,
        title,
        body: data.body ?? bodyPrefix,
      },
      {
        id: "questions",
        kind: "markdown" as const,
        title: "Questions",
        body: questionsMarkdown(data.questions),
      },
      ...(data.passingGuidance ? [{
        id: "guidance",
        kind: "cta" as const,
        title: "Passing guidance",
        body: data.passingGuidance,
      }] : []),
    ],
    faq: data.faq,
  };
}

const quizTemplate: PageTemplate<QuizTemplateData> = definePageTemplate({
  id: "education.quiz",
  domain: "education",
  kind: "answer",
  title: "Quiz page",
  description: "Course quiz page.",
  dataSchemaId: "https://schemas.mdwrk.com/lander/page-template/education/quiz.schema.json",
  topology: { childPolicy: "terminal" },
  buildPage: (context) => assessmentPage(context, "Quiz", "Answer the course quiz questions."),
  schema: (context) => assessmentSchema(context),
});

const courseTestTemplate: PageTemplate<CourseTestTemplateData> = definePageTemplate({
  id: "education.course-test",
  domain: "education",
  kind: "answer",
  title: "Course test page",
  description: "Course final assessment page.",
  dataSchemaId: "https://schemas.mdwrk.com/lander/page-template/education/course-test.schema.json",
  topology: { childPolicy: "terminal" },
  buildPage: (context) => {
    const page = assessmentPage(context, "Course test", "Complete the final course test.");
    const checklist = context.instance.data.readinessChecklist ?? [];
    const scoreSummary = context.instance.data.scoreSummary;
    return {
      ...page,
      sections: [
        ...page.sections.slice(0, 1),
        {
          id: "readiness",
          kind: "markdown" as const,
          title: "Readiness checklist",
          body: listMarkdown("Readiness checklist", checklist, context.instance.data.body ?? "Review the course before you start."),
        },
        ...page.sections.slice(1),
        ...(scoreSummary ? [{
          id: "score-summary",
          kind: "feature_detail" as const,
          title: "Score summary",
          body: scoreSummary,
        }] : []),
      ],
    };
  },
  schema: (context) => assessmentSchema(context),
});

export const educationTemplates = [
  learningPathTemplate,
  courseTemplate,
  moduleTemplate,
  quizTemplate,
  courseTestTemplate,
];

export const educationDomainBundle = defineTemplateBundle({
  id: "domain.education",
  domain: "education",
  title: "Education page templates",
  templates: educationTemplates,
});
