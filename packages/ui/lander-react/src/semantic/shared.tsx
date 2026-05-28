import React from "react";

export function SemanticStructuredDataGate({
  emitStructuredData = true,
  children,
}: {
  emitStructuredData?: boolean;
  children: React.ReactNode;
}) {
  return emitStructuredData === false ? null : <>{children}</>;
}

export function joinClassNames(...values: Array<string | undefined | false | null>): string | undefined {
  const className = values.filter(Boolean).join(" ").trim();
  return className || undefined;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function mergeRecordLike<T>(base: T, override: unknown): T {
  if (!isRecord(base) || !isRecord(override)) return (override as T | undefined) ?? base;
  return { ...base, ...override } as T;
}

export function mergeArrayByIndex<T extends object>(base: T[], override: unknown): T[] {
  if (!Array.isArray(override)) return base;
  const overrideRecords = override.filter((entry): entry is Record<string, unknown> => isRecord(entry));
  const merged = base.map((entry, index) => ({ ...entry, ...(overrideRecords[index] ?? {}) })) as T[];
  if (overrideRecords.length > base.length) {
    merged.push(...overrideRecords.slice(base.length).map((entry) => ({ ...entry } as T)));
  }
  return merged;
}

export function mergeArrayByIndexCapped<T extends object>(base: T[], override: unknown): T[] {
  if (!Array.isArray(override)) return base;
  const overrideRecords = override.filter((entry): entry is Record<string, unknown> => isRecord(entry));
  return base.map((entry, index) => ({ ...entry, ...(overrideRecords[index] ?? {}) })) as T[];
}

export function nonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function firstImage(value?: string | string[]): string | undefined {
  if (typeof value === "string" && value.trim()) return value;
  if (Array.isArray(value)) return value.find((entry) => typeof entry === "string" && Boolean(entry.trim()));
  return undefined;
}
