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
  const tokens: string[] = [];
  const seen = new Set<string>();

  for (const value of values) {
    if (!value) continue;
    for (const token of value.split(/\s+/u)) {
      if (!token || seen.has(token)) continue;
      seen.add(token);
      tokens.push(token);
    }
  }

  return tokens.length ? tokens.join(" ") : undefined;
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

export interface SemanticMetaEntry {
  label: string;
  value: React.ReactNode;
}

export interface SemanticShellProps {
  kind: string;
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  meta?: SemanticMetaEntry[];
  imageSrc?: string;
  imageAlt?: string;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  as?: "article" | "section" | "nav" | "aside" | "div";
}

export function SemanticShell({
  kind,
  title,
  eyebrow,
  subtitle,
  description,
  meta,
  imageSrc,
  imageAlt,
  body,
  actions,
  footer,
  children,
  className,
  as = "article",
}: SemanticShellProps) {
  const Component = as;
  return (
    <Component className={joinClassNames("lander-semantic", `lander-semantic--${kind}`, className)}>
      {title || eyebrow || subtitle || description || (meta?.length ?? 0) > 0 ? (
        <header className="lander-semantic__header">
          {eyebrow ? <p className="lander-semantic__eyebrow">{eyebrow}</p> : null}
          {title ? <h1 className="lander-semantic__title">{title}</h1> : null}
          {subtitle ? <p className="lander-semantic__subtitle">{subtitle}</p> : null}
          {description ? <p className="lander-semantic__description">{description}</p> : null}
          {meta?.length ? (
            <dl className="lander-semantic__meta">
              {meta.map((entry, index) => (
                <React.Fragment key={`${entry.label}-${index}`}>
                  <dt>{entry.label}</dt>
                  <dd>{entry.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          ) : null}
        </header>
      ) : null}
      {imageSrc ? <img className="lander-semantic__image" src={imageSrc} alt={imageAlt ?? ""} /> : null}
      {body ? <div className="lander-semantic__body">{body}</div> : null}
      {children}
      {actions ? <div className="lander-semantic__actions">{actions}</div> : null}
      {footer ? <footer className="lander-semantic__footer">{footer}</footer> : null}
    </Component>
  );
}

export function renderJsonPreview(value: unknown): React.ReactNode {
  if (value === undefined || value === null) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  return <code>{JSON.stringify(value)}</code>;
}

export function bodyList(items: React.ReactNode[], ordered = false) {
  if (!items.length) return null;
  const List = ordered ? "ol" : "ul";
  return (
    <List>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </List>
  );
}

export function thingReference(value: unknown): Record<string, unknown> | undefined {
  if (isRecord(value)) return value;
  const text = nonEmptyString(value);
  if (!text) return undefined;
  return /^https?:\/\//i.test(text)
    ? { "@type": "Thing", url: text, name: text }
    : { "@type": "Thing", name: text };
}

export function creativeWorkReference(value: unknown): Record<string, unknown> | undefined {
  if (isRecord(value)) return value;
  const text = nonEmptyString(value);
  if (!text) return undefined;
  return /^https?:\/\//i.test(text)
    ? { "@type": "CreativeWork", url: text, name: text }
    : { "@type": "CreativeWork", name: text };
}

export function definedRegionReference(value: unknown): Record<string, unknown> | undefined {
  if (isRecord(value)) return value;
  const text = nonEmptyString(value);
  if (!text) return undefined;
  return { "@type": "DefinedRegion", name: text };
}

export function quantitativeValueReference(value: number | undefined): Record<string, unknown> | undefined {
  if (typeof value !== "number" || Number.isNaN(value)) return undefined;
  return { "@type": "QuantitativeValue", value };
}
