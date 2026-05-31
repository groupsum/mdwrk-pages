import {
  GENERATED_STRUCTURED_DATA_SCHEMA_ASSETS,
  GENERATED_STRUCTURED_DATA_SCHEMA_REGISTRY,
} from "./generated-structured-data-schemas.js";

export interface StructuredDataSchemaDefinition {
  [key: string]: unknown;
}

export interface StructuredDataSchemaRegistryEntry {
  type: string;
  schemaId: string;
  assetPath: string;
  schema: StructuredDataSchemaDefinition;
}

export interface StructuredDataValidationIssue {
  keyword: string;
  path: string;
  message: string;
}

type RuntimeSchema = Record<string, any>;
type RuntimeRegistryEntry = {
  type: string;
  schemaId: string;
  assetPath: string;
  schema: RuntimeSchema;
};

const registry = GENERATED_STRUCTURED_DATA_SCHEMA_REGISTRY as unknown as readonly RuntimeRegistryEntry[];
const assetMap = GENERATED_STRUCTURED_DATA_SCHEMA_ASSETS as unknown as Record<string, RuntimeSchema>;

function deepFreeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const nested of Object.values(value)) deepFreeze(nested);
  }
  return value;
}

export const STRUCTURED_DATA_SCHEMA_REGISTRY = deepFreeze(registry);

const STRUCTURED_DATA_SCHEMA_BY_TYPE = new Map(
  STRUCTURED_DATA_SCHEMA_REGISTRY.map((entry) => [entry.type, entry]),
);

const STRUCTURED_DATA_SCHEMA_BY_SCHEMA_ID = new Map(
  STRUCTURED_DATA_SCHEMA_REGISTRY.map((entry) => [entry.schemaId, entry]),
);

const TYPE_SCHEMA_BY_NAME = new Map<string, { assetPath: string; schema: RuntimeSchema }>();
for (const [assetPath, schema] of Object.entries(assetMap)) {
  if (!/(^|\/)types\/[^/]+\.schema\.json$/i.test(assetPath)) continue;
  if (!schema || typeof schema !== "object" || Array.isArray(schema)) continue;
  const match = assetPath.match(/(^|\/)types\/([^/]+)\.schema\.json$/i);
  const typeName = match?.[2];
  if (!typeName) continue;
  TYPE_SCHEMA_BY_NAME.set(typeName, { assetPath, schema: schema as RuntimeSchema });
}

function joinPath(basePath: string, next: string): string {
  return basePath ? `${basePath}.${next}` : next;
}

function issue(keyword: string, path: string, message: string): StructuredDataValidationIssue {
  return { keyword, path, message };
}

function referencedTypeNames(assetPath: string, schema: RuntimeSchema): string[] {
  const refs = [];
  for (const branch of schema.allOf ?? []) {
    const ref = branch && typeof branch === "object" && !Array.isArray(branch) ? (branch as RuntimeSchema).$ref : undefined;
    if (typeof ref !== "string") continue;
    const resolved = assetPathFromSchemaRef(assetPath, ref);
    const match = resolved?.match(/(^|\/)types\/([^/]+)\.schema\.json$/i);
    if (match?.[2]) refs.push(match[2]);
  }
  return refs;
}

function isSubtypeOf(childType: string, parentType: string, seen = new Set<string>()): boolean {
  if (childType === parentType) return true;
  if (seen.has(childType)) return false;
  seen.add(childType);
  const entry = TYPE_SCHEMA_BY_NAME.get(childType);
  if (!entry) return false;
  const parents = referencedTypeNames(entry.assetPath, entry.schema);
  return parents.some((candidate) => isSubtypeOf(candidate, parentType, seen));
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : undefined;
}

function assetPathFromSchemaRef(currentAssetPath: string, ref: string): string | undefined {
  if (ref.startsWith("#")) return currentAssetPath;
  const currentDir = currentAssetPath.replaceAll("\\", "/").split("/").slice(0, -1).join("/");
  const normalized = currentDir
    ? currentDir.split("/").concat(ref.split("/")).join("/")
    : ref;
  const resolved = normalized
    .split("/")
    .reduce<string[]>((parts, part) => {
      if (!part || part === ".") return parts;
      if (part === "..") {
        parts.pop();
        return parts;
      }
      parts.push(part);
      return parts;
    }, [])
    .join("/");
  return resolved || undefined;
}

function isGeneratedTypeAssetPath(assetPath: string): boolean {
  return /(^|\/)generated-schemaorg-full\/types\/[^/]+\.schema\.json$/i.test(assetPath);
}

function schemaAtPointer(schema: RuntimeSchema, ref: string): unknown {
  if (!ref.startsWith("#/")) return undefined;
  const pointer = ref.slice(2).split("/").map((segment) => segment.replace(/~1/g, "/").replace(/~0/g, "~"));
  let current: unknown = schema;
  for (const segment of pointer) {
    if (!current || typeof current !== "object" || !(segment in (current as Record<string, unknown>))) return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
}

const NORMALIZED_GENERATED_TYPE_SCHEMA_CACHE = new Map<string, RuntimeSchema>();

function flattenGeneratedTypeSchema(assetPath: string, schema: RuntimeSchema, seen = new Set<string>()): RuntimeSchema {
  if (NORMALIZED_GENERATED_TYPE_SCHEMA_CACHE.has(assetPath)) return NORMALIZED_GENERATED_TYPE_SCHEMA_CACHE.get(assetPath) as RuntimeSchema;
  if (seen.has(assetPath)) return schema;
  seen.add(assetPath);

  if (Array.isArray(schema.allOf) && schema.allOf.length) {
    const primitiveRefBranch = schema.allOf.find((branch) => {
      if (!branch || typeof branch !== "object" || Array.isArray(branch) || typeof (branch as RuntimeSchema).$ref !== "string") return false;
      const resolvedAssetPath = assetPathFromSchemaRef(assetPath, (branch as RuntimeSchema).$ref as string);
      const resolvedSchema = resolvedAssetPath ? assetMap[resolvedAssetPath] : undefined;
      return Boolean(
        resolvedSchema
          && typeof resolvedSchema === "object"
          && !Array.isArray(resolvedSchema)
          && typeof (resolvedSchema as RuntimeSchema).type === "string"
          && ["string", "number", "boolean"].includes((resolvedSchema as RuntimeSchema).type),
      );
    }) as RuntimeSchema | undefined;
    const objectWrapperBranch = schema.allOf.find((branch) =>
      branch
        && typeof branch === "object"
        && !Array.isArray(branch)
        && (branch as RuntimeSchema).type === "object"
        && typeof (branch as RuntimeSchema).properties?.["@type"]?.const === "string",
    );
    if (primitiveRefBranch && objectWrapperBranch) {
      const resolvedAssetPath = assetPathFromSchemaRef(assetPath, primitiveRefBranch.$ref as string);
      const resolvedSchema = resolvedAssetPath ? assetMap[resolvedAssetPath] : undefined;
      if (resolvedSchema && typeof resolvedSchema === "object" && !Array.isArray(resolvedSchema)) {
        const normalizedPrimitive = {
          ...(resolvedSchema as RuntimeSchema),
          $id: schema.$id,
          $schema: schema.$schema,
          title: schema.title,
          description: schema.description,
        };
        NORMALIZED_GENERATED_TYPE_SCHEMA_CACHE.set(assetPath, normalizedPrimitive);
        return normalizedPrimitive;
      }
    }
  }

  const mergedProperties: Record<string, unknown> = {};
  const required = new Set<string>();

  for (const branch of schema.allOf ?? []) {
    if (!branch || typeof branch !== "object" || Array.isArray(branch)) continue;
    const branchSchema = branch as RuntimeSchema;
    if (typeof branchSchema.$ref === "string") {
      const resolvedAssetPath = assetPathFromSchemaRef(assetPath, branchSchema.$ref);
      const resolvedSchema = resolvedAssetPath ? assetMap[resolvedAssetPath] : undefined;
      if (resolvedAssetPath && resolvedSchema && typeof resolvedSchema === "object" && !Array.isArray(resolvedSchema)) {
        const normalizedParent = isGeneratedTypeAssetPath(resolvedAssetPath)
          ? flattenGeneratedTypeSchema(resolvedAssetPath, resolvedSchema as RuntimeSchema, seen)
          : (resolvedSchema as RuntimeSchema);
        Object.assign(mergedProperties, normalizedParent.properties ?? {});
        for (const entry of normalizedParent.required ?? []) {
          if (entry !== "@type") required.add(entry);
        }
      }
      continue;
    }

    Object.assign(mergedProperties, branchSchema.properties ?? {});
    for (const entry of branchSchema.required ?? []) {
      if (entry !== "@type") required.add(entry);
    }
  }

  Object.assign(mergedProperties, schema.properties ?? {});
  for (const entry of schema.required ?? []) required.add(entry);

  const normalized = {
    ...schema,
    allOf: undefined,
    type: "object",
    properties: mergedProperties,
    required: Array.from(required),
    unevaluatedProperties: false,
  };

  NORMALIZED_GENERATED_TYPE_SCHEMA_CACHE.set(assetPath, normalized);
  return normalized;
}

function resolveSchemaRef(currentAssetPath: string, currentSchema: RuntimeSchema, ref: string) {
  if (ref.startsWith("#")) {
    return { assetPath: currentAssetPath, schema: schemaAtPointer(currentSchema, ref) };
  }
  const targetAssetPath = assetPathFromSchemaRef(currentAssetPath, ref);
  if (!targetAssetPath) return { assetPath: currentAssetPath, schema: undefined };
  const targetSchema = assetMap[targetAssetPath];
  if (targetSchema && typeof targetSchema === "object" && !Array.isArray(targetSchema) && isGeneratedTypeAssetPath(targetAssetPath)) {
    return {
      assetPath: targetAssetPath,
      schema: flattenGeneratedTypeSchema(targetAssetPath, targetSchema as RuntimeSchema),
    };
  }
  return { assetPath: targetAssetPath, schema: targetSchema };
}

function schemaMatchesType(expected: string | string[] | undefined, value: unknown): boolean {
  const expectedTypes = Array.isArray(expected) ? expected : expected ? [expected] : [];
  if (!expectedTypes.length) return true;
  return expectedTypes.some((type) => {
    if (type === "null") return value === null;
    if (type === "array") return Array.isArray(value);
    if (type === "object") return Boolean(value) && typeof value === "object" && !Array.isArray(value);
    return typeof value === type;
  });
}

function stripSchemaMeta(schema: RuntimeSchema): RuntimeSchema {
  const {
    $id,
    $schema,
    title,
    description,
    "x-schemaorg-cardinality": schemaOrgCardinality,
    ...rest
  } = schema;
  void $id;
  void $schema;
  void title;
  void description;
  void schemaOrgCardinality;
  return rest;
}

function asSingleValueSchema(schema: RuntimeSchema): RuntimeSchema {
  if (schema.$ref) return schema;
  const next = { ...schema };
  delete next["x-schemaorg-cardinality"];
  return next;
}

function isPrimitiveDatatypeWrapper(schema: RuntimeSchema): boolean {
  if (!Array.isArray(schema.allOf) || schema.allOf.length < 2) return false;
  const primitiveBranch = schema.allOf.find((branch) =>
    branch && typeof branch === "object" && !Array.isArray(branch) && typeof (branch as RuntimeSchema).type === "string"
      && ["string", "number", "boolean"].includes((branch as RuntimeSchema).type),
  );
  const objectTypeBranch = schema.allOf.find((branch) =>
    branch
      && typeof branch === "object"
      && !Array.isArray(branch)
      && (branch as RuntimeSchema).type === "object"
      && typeof (branch as RuntimeSchema).properties?.["@type"]?.const === "string",
  );
  return Boolean(primitiveBranch && objectTypeBranch);
}

function primitiveBranches(schema: RuntimeSchema): RuntimeSchema[] {
  return (schema.allOf ?? []).filter((branch) =>
    branch && typeof branch === "object" && !Array.isArray(branch) && typeof (branch as RuntimeSchema).type === "string"
      && ["string", "number", "boolean"].includes((branch as RuntimeSchema).type),
  ) as RuntimeSchema[];
}

function isSchemaOrgTypedWrapperFailure(entry: StructuredDataValidationIssue, path: string): boolean {
  return (
    (entry.keyword === "type" && entry.path === path && entry.message === "Expected object.")
    || (entry.keyword === "required" && entry.path === `${path}.@type`)
    || (entry.keyword === "const" && entry.path === `${path}.@type`)
  );
}

function collectAllowedPropertyNames(assetPath: string, schema: RuntimeSchema, seen = new Set<string>()): Set<string> {
  const key = `${assetPath}::${schema.$id ?? schema.title ?? "schema"}`;
  if (seen.has(key)) return new Set(Object.keys(schema.properties ?? {}));
  seen.add(key);

  const propertyNames = new Set(Object.keys(schema.properties ?? {}));
  for (const branch of schema.allOf ?? []) {
    if (branch && typeof branch === "object" && typeof branch.$ref === "string") {
      const resolved = resolveSchemaRef(assetPath, schema, branch.$ref);
      if (resolved.schema && typeof resolved.schema === "object" && !Array.isArray(resolved.schema)) {
        for (const prop of collectAllowedPropertyNames(
          resolved.assetPath,
          resolved.schema as RuntimeSchema,
          seen,
        )) {
          propertyNames.add(prop);
        }
      }
    } else if (branch && typeof branch === "object" && !Array.isArray(branch)) {
      for (const prop of collectAllowedPropertyNames(assetPath, branch as RuntimeSchema, seen)) {
        propertyNames.add(prop);
      }
    }
  }
  return propertyNames;
}

function validateAgainstSchema(
  currentAssetPath: string,
  rootSchema: RuntimeSchema,
  schema: RuntimeSchema,
  value: unknown,
  path: string,
): StructuredDataValidationIssue[] {
  const issues: StructuredDataValidationIssue[] = [];

  if (schema["x-schemaorg-cardinality"] === "open-world" && Array.isArray(value)) {
    const itemSchema = asSingleValueSchema(schema);
    return value.flatMap((item, index) =>
      validateAgainstSchema(currentAssetPath, rootSchema, itemSchema, item, `${path}[${index}]`),
    );
  }

  if (typeof schema.$ref === "string") {
    const resolved = resolveSchemaRef(currentAssetPath, rootSchema, schema.$ref);
    if (!resolved.schema || typeof resolved.schema !== "object" || Array.isArray(resolved.schema)) {
      return [issue("ref", path, `Schema reference ${schema.$ref} could not be resolved.`)];
    }
    return validateAgainstSchema(resolved.assetPath, resolved.schema as RuntimeSchema, resolved.schema as RuntimeSchema, value, path);
  }

  if (isPrimitiveDatatypeWrapper(schema) && (typeof value === "string" || typeof value === "number" || typeof value === "boolean")) {
    for (const branch of primitiveBranches(schema)) {
      issues.push(...validateAgainstSchema(currentAssetPath, rootSchema, stripSchemaMeta(branch), value, path));
    }
    return issues;
  }

  if (Array.isArray(schema.allOf) && schema.allOf.length) {
    const branchResults = schema.allOf.map((branch) =>
      validateAgainstSchema(currentAssetPath, rootSchema, branch as RuntimeSchema, value, path),
    );
    if (
      (typeof value !== "object" || value === null || Array.isArray(value))
      && branchResults.some((result) => result.length === 0)
      && branchResults.every((result) => result.length === 0 || result.every((entry) => isSchemaOrgTypedWrapperFailure(entry, path)))
    ) {
      return issues;
    }
    for (const result of branchResults) {
      issues.push(...result);
    }
  }

  if (Array.isArray(schema.oneOf) && schema.oneOf.length) {
    const branchResults = schema.oneOf.map((branch) =>
      validateAgainstSchema(currentAssetPath, rootSchema, branch as RuntimeSchema, value, path),
    );
    if (!branchResults.some((result) => result.length === 0)) {
      return [issue("oneOf", path, "Value did not satisfy any allowed schema shape.")];
    }
    return issues;
  }

  if ("const" in schema && schema.const !== value) {
    issues.push(issue("const", path, `Expected constant value ${JSON.stringify(schema.const)}.`));
    return issues;
  }

  if (Array.isArray(schema.enum) && schema.enum.length > 0 && !schema.enum.includes(value as never)) {
    issues.push(issue("enum", path, `Expected one of: ${schema.enum.join(", ")}.`));
    return issues;
  }

  if (!schemaMatchesType(schema.type as string | string[] | undefined, value)) {
    if (schema.type !== undefined) {
      issues.push(issue("type", path, `Expected ${Array.isArray(schema.type) ? schema.type.join(" | ") : schema.type}.`));
      return issues;
    }
  }

  const schemaType = schema.type as string | string[] | undefined;

  if (schemaType === "string") {
    if (typeof value === "string" && typeof schema.minLength === "number" && value.length < schema.minLength) {
      issues.push(issue("minLength", path, `Expected at least ${schema.minLength} characters.`));
    }
    return issues;
  }

  if (schemaType === "number" || schemaType === "boolean" || value === null) return issues;

  if (schemaType === "array") {
    if (!Array.isArray(value)) return issues;
    if (typeof schema.minItems === "number" && value.length < schema.minItems) {
      issues.push(issue("minItems", path, `Expected at least ${schema.minItems} items.`));
    }
    if (schema.items && typeof schema.items === "object") {
      value.forEach((item, index) => {
        issues.push(...validateAgainstSchema(currentAssetPath, rootSchema, schema.items as RuntimeSchema, item, `${path}[${index}]`));
      });
    }
    return issues;
  }

  const record = asRecord(value);
  if (!record) return issues;

  const expectedType = typeof schema.properties?.["@type"]?.const === "string"
    ? schema.properties["@type"].const
    : undefined;
  const actualType = typeof record["@type"] === "string" ? record["@type"] : undefined;
  const allowsSubtype = Boolean(
    expectedType
      && actualType
      && actualType !== expectedType
      && isSubtypeOf(actualType, expectedType),
  );

  for (const requiredKey of schema.required ?? []) {
    if (!(requiredKey in record)) issues.push(issue("required", joinPath(path, requiredKey), "Required property is missing."));
  }

  for (const [key, propertySchema] of Object.entries(schema.properties ?? {})) {
    if (!(key in record)) continue;
    if (allowsSubtype && key === "@type") continue;
    if (propertySchema && typeof propertySchema === "object") {
      issues.push(...validateAgainstSchema(currentAssetPath, rootSchema, propertySchema as RuntimeSchema, record[key], joinPath(path, key)));
    }
  }

  if (!allowsSubtype && (schema.unevaluatedProperties === false || schema.additionalProperties === false)) {
    const allowedKeys = collectAllowedPropertyNames(currentAssetPath, schema);
    for (const key of Object.keys(record)) {
      if (!allowedKeys.has(key)) issues.push(issue("unevaluatedProperties", joinPath(path, key), "Unexpected property."));
    }
  }

  return issues;
}

export function listStructuredDataSchemas(): readonly StructuredDataSchemaRegistryEntry[] {
  return STRUCTURED_DATA_SCHEMA_REGISTRY as unknown as readonly StructuredDataSchemaRegistryEntry[];
}

export function getStructuredDataSchemaByType(type: string): StructuredDataSchemaRegistryEntry | undefined {
  return STRUCTURED_DATA_SCHEMA_BY_TYPE.get(type) as unknown as StructuredDataSchemaRegistryEntry | undefined;
}

export function getStructuredDataSchemaBySchemaId(schemaIdValue: string): StructuredDataSchemaRegistryEntry | undefined {
  return STRUCTURED_DATA_SCHEMA_BY_SCHEMA_ID.get(schemaIdValue) as unknown as StructuredDataSchemaRegistryEntry | undefined;
}

export function getStructuredDataSchemaAssetMap(): Readonly<Record<string, unknown>> {
  return assetMap;
}

export function validateStructuredDataByType(type: string, value: unknown): StructuredDataValidationIssue[] {
  const entry = getStructuredDataSchemaByType(type);
  if (!entry) return [];
  return validateAgainstSchema(
    entry.assetPath.replace(/^\.\//, "").replace(/^schemas\//, ""),
    entry.schema as unknown as RuntimeSchema,
    entry.schema as unknown as RuntimeSchema,
    value,
    "data",
  );
}

export function validateStructuredDataBySchemaId(schemaIdValue: string, value: unknown): StructuredDataValidationIssue[] {
  const entry = getStructuredDataSchemaBySchemaId(schemaIdValue);
  if (!entry) return [];
  return validateAgainstSchema(
    entry.assetPath.replace(/^\.\//, "").replace(/^schemas\//, ""),
    entry.schema as unknown as RuntimeSchema,
    entry.schema as unknown as RuntimeSchema,
    value,
    "data",
  );
}
