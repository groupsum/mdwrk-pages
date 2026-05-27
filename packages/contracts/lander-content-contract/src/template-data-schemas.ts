export interface TemplateDataSchemaDefinition {
  $schema: string;
  $id: string;
  title: string;
  type: "object";
  additionalProperties?: boolean;
  required?: string[];
  properties?: Record<string, TemplateDataSchemaProperty>;
  $defs?: Record<string, TemplateDataSchemaDefinition>;
  items?: TemplateDataSchemaProperty;
  minItems?: number;
  minLength?: number;
  enum?: string[];
}

export interface TemplateDataSchemaRegistryEntry {
  templateId: string;
  schemaId: string;
  assetPath: string;
  schema: TemplateDataSchemaDefinition;
}

export interface TemplateDataValidationIssue {
  keyword: string;
  path: string;
  message: string;
}

type TemplateDataSchemaProperty =
  | TemplateDataSchemaDefinition
  | {
      type?: "string" | "number" | "object" | "array";
      additionalProperties?: boolean;
      required?: string[];
      properties?: Record<string, TemplateDataSchemaProperty>;
      items?: TemplateDataSchemaProperty;
      minItems?: number;
      minLength?: number;
      enum?: string[];
      $ref?: string;
    };

const learningPathTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/learning-path.schema.json",
  title: "Education Learning Path Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string" },
    outcomes: { type: "array", items: { type: "string", minLength: 1 } },
    prerequisites: { type: "array", items: { type: "string", minLength: 1 } },
    difficulty: { type: "string", enum: ["beginner", "intermediate", "advanced"] },
    estimatedDuration: { type: "string" },
    metadata: { type: "object", additionalProperties: true },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: {
    faqItem: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "faqItem",
      title: "FAQ item",
      type: "object",
      additionalProperties: false,
      required: ["question", "answer"],
      properties: {
        question: { type: "string", minLength: 1 },
        answer: { type: "string", minLength: 1 },
      },
    },
  },
};

const courseTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/course.schema.json",
  title: "Education Course Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string" },
    objectives: { type: "array", items: { type: "string", minLength: 1 } },
    prerequisites: { type: "array", items: { type: "string", minLength: 1 } },
    status: { type: "string", enum: ["not_started", "in_progress", "completed"] },
    completionCriteria: { type: "string" },
    testCallout: { type: "string" },
    metadata: { type: "object", additionalProperties: true },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: learningPathTemplateDataSchema.$defs,
};

const moduleTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/module.schema.json",
  title: "Education Module Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary", "body"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string", minLength: 1 },
    keyTakeaways: { type: "array", items: { type: "string", minLength: 1 } },
    status: { type: "string", enum: ["not_started", "in_progress", "completed"] },
    nextStep: { type: "string" },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: learningPathTemplateDataSchema.$defs,
};

const flashcardDefinition: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "flashcard",
  title: "Flashcard item",
  type: "object",
  additionalProperties: false,
  required: ["question", "answer"],
  properties: {
    question: { type: "string", minLength: 1 },
    answer: { type: "string", minLength: 1 },
    explanation: { type: "string" },
  },
};

const flashcardsTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/flashcards.schema.json",
  title: "Education Flashcards Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary", "cards"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string" },
    cards: { type: "array", minItems: 1, items: { $ref: "#/$defs/flashcard" } },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: {
    ...learningPathTemplateDataSchema.$defs,
    flashcard: flashcardDefinition,
  },
};

const questionDefinition: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "question",
  title: "Assessment question",
  type: "object",
  additionalProperties: false,
  required: ["question", "options", "correctAnswerIndex", "explanation"],
  properties: {
    question: { type: "string", minLength: 1 },
    options: { type: "array", minItems: 2, items: { type: "string", minLength: 1 } },
    correctAnswerIndex: { type: "number" },
    explanation: { type: "string", minLength: 1 },
  },
};

const quizTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/quiz.schema.json",
  title: "Education Quiz Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary", "questions"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string" },
    passingGuidance: { type: "string" },
    questions: { type: "array", minItems: 1, items: { $ref: "#/$defs/question" } },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: {
    ...learningPathTemplateDataSchema.$defs,
    question: questionDefinition,
  },
};

const courseTestTemplateDataSchema: TemplateDataSchemaDefinition = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://schemas.mdwrk.com/lander/page-template/education/course-test.schema.json",
  title: "Education Course Test Template Data",
  type: "object",
  additionalProperties: false,
  required: ["summary", "questions"],
  properties: {
    eyebrow: { type: "string" },
    intro: { type: "string" },
    summary: { type: "string", minLength: 1 },
    body: { type: "string" },
    readinessChecklist: { type: "array", items: { type: "string", minLength: 1 } },
    scoreSummary: { type: "string" },
    passingGuidance: { type: "string" },
    questions: { type: "array", minItems: 1, items: { $ref: "#/$defs/question" } },
    faq: { type: "array", items: { $ref: "#/$defs/faqItem" } },
    schemaKinds: { type: "array", items: { type: "string" } },
    sections: { type: "array", items: { type: "object", additionalProperties: true } },
  },
  $defs: {
    ...learningPathTemplateDataSchema.$defs,
    question: questionDefinition,
  },
};

export const TEMPLATE_DATA_SCHEMA_REGISTRY = Object.freeze([
  {
    templateId: "education.learning-path",
    schemaId: learningPathTemplateDataSchema.$id,
    assetPath: "./schemas/learning-path.schema.json",
    schema: learningPathTemplateDataSchema,
  },
  {
    templateId: "education.course",
    schemaId: courseTemplateDataSchema.$id,
    assetPath: "./schemas/course.schema.json",
    schema: courseTemplateDataSchema,
  },
  {
    templateId: "education.module",
    schemaId: moduleTemplateDataSchema.$id,
    assetPath: "./schemas/module.schema.json",
    schema: moduleTemplateDataSchema,
  },
  {
    templateId: "education.flashcards",
    schemaId: flashcardsTemplateDataSchema.$id,
    assetPath: "./schemas/flashcards.schema.json",
    schema: flashcardsTemplateDataSchema,
  },
  {
    templateId: "education.quiz",
    schemaId: quizTemplateDataSchema.$id,
    assetPath: "./schemas/quiz.schema.json",
    schema: quizTemplateDataSchema,
  },
  {
    templateId: "education.course-test",
    schemaId: courseTestTemplateDataSchema.$id,
    assetPath: "./schemas/course-test.schema.json",
    schema: courseTestTemplateDataSchema,
  },
] as const satisfies readonly TemplateDataSchemaRegistryEntry[]);

const TEMPLATE_DATA_SCHEMA_BY_TEMPLATE_ID = new Map<string, TemplateDataSchemaRegistryEntry>(
  TEMPLATE_DATA_SCHEMA_REGISTRY.map((entry) => [entry.templateId, entry]),
);

const TEMPLATE_DATA_SCHEMA_BY_SCHEMA_ID = new Map<string, TemplateDataSchemaRegistryEntry>(
  TEMPLATE_DATA_SCHEMA_REGISTRY.map((entry) => [entry.schemaId, entry]),
);

function joinPath(basePath: string, next: string): string {
  return basePath ? `${basePath}.${next}` : next;
}

function issue(keyword: string, path: string, message: string): TemplateDataValidationIssue {
  return { keyword, path, message };
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : undefined;
}

function resolveRef(root: TemplateDataSchemaDefinition, ref: string): TemplateDataSchemaProperty | undefined {
  if (!ref.startsWith("#/$defs/")) return undefined;
  return root.$defs?.[ref.slice("#/$defs/".length)];
}

function validateAgainstSchema(
  root: TemplateDataSchemaDefinition,
  schema: TemplateDataSchemaProperty,
  value: unknown,
  path: string,
): TemplateDataValidationIssue[] {
  const issues: TemplateDataValidationIssue[] = [];
  if ("$ref" in schema && schema.$ref) {
    const resolved = resolveRef(root, schema.$ref);
    if (!resolved) {
      return [issue("ref", path, `Schema reference ${schema.$ref} could not be resolved.`)];
    }
    return validateAgainstSchema(root, resolved, value, path);
  }

  if (schema.type === "string") {
    if (typeof value !== "string") {
      return [issue("type", path, "Expected string.")];
    }
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      issues.push(issue("minLength", path, `Expected at least ${schema.minLength} characters.`));
    }
    if (schema.enum && !schema.enum.includes(value)) {
      issues.push(issue("enum", path, `Expected one of: ${schema.enum.join(", ")}.`));
    }
    return issues;
  }

  if (schema.type === "number") {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return [issue("type", path, "Expected number.")];
    }
    return issues;
  }

  if (schema.type === "array") {
    if (!Array.isArray(value)) {
      return [issue("type", path, "Expected array.")];
    }
    if (schema.minItems !== undefined && value.length < schema.minItems) {
      issues.push(issue("minItems", path, `Expected at least ${schema.minItems} items.`));
    }
    if (schema.items) {
      value.forEach((item, index) => {
        issues.push(...validateAgainstSchema(root, schema.items!, item, `${path}[${index}]`));
      });
    }
    return issues;
  }

  if (schema.type === "object") {
    const record = asRecord(value);
    if (!record) {
      return [issue("type", path, "Expected object.")];
    }
    for (const requiredKey of schema.required ?? []) {
      if (!(requiredKey in record)) {
        issues.push(issue("required", joinPath(path, requiredKey), "Required property is missing."));
      }
    }
    const propertyKeys = new Set(Object.keys(schema.properties ?? {}));
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(record)) {
        if (!propertyKeys.has(key)) {
          issues.push(issue("additionalProperties", joinPath(path, key), "Unexpected property."));
        }
      }
    }
    for (const [key, propertySchema] of Object.entries(schema.properties ?? {})) {
      if (!(key in record)) continue;
      issues.push(...validateAgainstSchema(root, propertySchema, record[key], joinPath(path, key)));
    }
    return issues;
  }

  return issues;
}

export function listTemplateDataSchemas(): readonly TemplateDataSchemaRegistryEntry[] {
  return TEMPLATE_DATA_SCHEMA_REGISTRY;
}

export function getTemplateDataSchemaByTemplateId(templateId: string): TemplateDataSchemaRegistryEntry | undefined {
  return TEMPLATE_DATA_SCHEMA_BY_TEMPLATE_ID.get(templateId);
}

export function getTemplateDataSchemaBySchemaId(schemaId: string): TemplateDataSchemaRegistryEntry | undefined {
  return TEMPLATE_DATA_SCHEMA_BY_SCHEMA_ID.get(schemaId);
}

export function validateTemplateDataByTemplateId(templateId: string, value: unknown): TemplateDataValidationIssue[] {
  const entry = getTemplateDataSchemaByTemplateId(templateId);
  return entry ? validateAgainstSchema(entry.schema, entry.schema, value, "data") : [];
}

export function validateTemplateDataBySchemaId(schemaId: string, value: unknown): TemplateDataValidationIssue[] {
  const entry = getTemplateDataSchemaBySchemaId(schemaId);
  return entry ? validateAgainstSchema(entry.schema, entry.schema, value, "data") : [];
}
