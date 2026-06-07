import React from "react";
import {
  Card as PrimitiveCard,
  JsonPreview,
  OrderedList,
  Pill,
  UnorderedList,
} from "@mdwrk/lander-primitives";

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

export type SemanticNamedReference = string | { name?: string; url?: string; ["@id"]?: string; ["@type"]?: string };
export type SemanticNamedMediaReference = string | { name?: string; url?: string; contentUrl?: string; thumbnailUrl?: string };

export function formatDateLabel(value?: string): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function namedReferenceLabel(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.name === "string" && record.name.trim()) return record.name;
    if (typeof record.url === "string" && record.url.trim()) return record.url;
    if (typeof record["@id"] === "string" && record["@id"].trim()) return record["@id"];
    if (typeof record["@type"] === "string" && record["@type"].trim()) return record["@type"];
  }
  return String(value ?? "");
}

export function namedReferenceHref(value: unknown): string | undefined {
  if (typeof value === "string" && /^https?:\/\//i.test(value)) return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.url === "string" && record.url.trim()) return record.url;
    if (typeof record["@id"] === "string" && /^https?:\/\//i.test(record["@id"])) return record["@id"];
  }
  return undefined;
}

export function referenceHref(value: unknown): string | undefined {
  return namedReferenceHref(value);
}

export function ReferenceInline({ value }: { value: unknown }) {
  const label = namedReferenceLabel(value);
  const href = referenceHref(value);
  if (!label) return null;
  return href ? <a href={href}>{label}</a> : <span>{label}</span>;
}

export function ReferenceList({
  items,
  label,
  className,
  listClassName,
  itemClassName,
}: {
  items: unknown[];
  label: string;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}) {
  if (!items.length) return null;
  return (
    <section className={joinClassNames("lander-semantic__reference-list", className)} aria-label={label}>
      <h2>{label}</h2>
      <ul className={listClassName}>
        {items.map((item, index) => (
          <li key={`${namedReferenceLabel(item)}-${index}`} className={itemClassName}>
            <ReferenceInline value={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LinkList({
  links,
  label,
  className,
  listClassName,
  itemClassName,
}: {
  links?: string[];
  label: string;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}) {
  if (!links?.length) return null;
  return (
    <section className={joinClassNames("lander-semantic__link-list", className)} aria-label={label}>
      <h2>{label}</h2>
      <ul className={listClassName}>
        {links.map((link) => (
          <li key={link} className={itemClassName}>
            <a href={link}>{link.replace(/^https?:\/\//, "")}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TextList({
  items,
  label,
  className,
  listClassName,
  itemClassName,
}: {
  items: string[];
  label: string;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}) {
  const values = items.filter((item) => item.trim().length > 0);
  if (!values.length) return null;
  return (
    <section className={joinClassNames("lander-semantic__text-list", className)} aria-label={label}>
      <h2>{label}</h2>
      <ul className={listClassName}>
        {values.map((item) => <li key={item} className={itemClassName}>{item}</li>)}
      </ul>
    </section>
  );
}

export function MediaList({
  items,
  label,
  type,
  className,
  listClassName,
  itemClassName,
  typeClassName,
}: {
  items: SemanticNamedMediaReference[];
  label: string;
  type: "Video" | "Audio";
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  typeClassName?: string;
}) {
  if (!items.length) return null;
  return (
    <section className={joinClassNames("lander-semantic__media-list", className)} aria-label={label}>
      <h2>{label}</h2>
      <ul className={listClassName}>
        {items.map((item, index) => {
          const title = namedReferenceLabel(item);
          const href = referenceHref(item);
          return (
            <li key={`${title}-${index}`} className={itemClassName}>
              <span className={joinClassNames("lander-semantic__media-type", typeClassName)}>{type}</span>
              {href ? <a href={href}>{title}</a> : <span>{title}</span>}
            </li>
          );
        })}
      </ul>
    </section>
  );
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
    <Component
      className={joinClassNames("mdwrk-primitive", "mdwrk-primitive--surface", "lander-semantic", `lander-semantic--${kind}`, className)}
      data-mdwrk-primitive="surface"
    >
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
  return <JsonPreview value={value} />;
}

function isPresentValue(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some((item) => isPresentValue(item));
  if (isRecord(value)) return Object.values(value).some((item) => isPresentValue(item));
  return true;
}

function valueKindLabel(value: unknown): string {
  if (Array.isArray(value)) return "Array";
  if (isRecord(value)) return "Object";
  if (typeof value === "boolean") return "Boolean";
  if (typeof value === "number") return "Number";
  if (typeof value === "string") return "Text";
  return "Value";
}

function fieldKeyLabel(key: string): string {
  if (key.startsWith("@")) return key;
  return key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

function primitivePreview(value: string | number | boolean): React.ReactNode {
  if (typeof value === "string" && /^https?:\/\//i.test(value)) {
    return <a href={value}>{value}</a>;
  }
  if (typeof value === "string" && /^mailto:/i.test(value)) {
    const email = value.replace(/^mailto:/i, "");
    return <a href={value}>{email}</a>;
  }
  if (typeof value === "string" && /^tel:/i.test(value)) {
    const phone = value.replace(/^tel:/i, "");
    return <a href={value}>{phone}</a>;
  }

  return <span className="lander-semantic__field-inline">{String(value)}</span>;
}

function renderStructuredArray(value: unknown[], depth: number): React.ReactNode {
  const items = value.filter((item) => isPresentValue(item));
  if (!items.length) return null;

  if (items.every((item) => typeof item === "string" || typeof item === "number" || typeof item === "boolean")) {
    return (
      <div className="lander-semantic__field-chip-list">
        {items.map((item, index) => (
          <Pill className="lander-semantic__field-chip" key={`${String(item)}-${index}`}>
            {primitivePreview(item as string | number | boolean)}
          </Pill>
        ))}
      </div>
    );
  }

  return (
    <div className="lander-semantic__field-stack">
      {items.map((item, index) => (
        <PrimitiveCard className="lander-semantic__field-card lander-semantic__field-card--nested" key={index}>
          <span className="lander-semantic__field-label">Item {index + 1}</span>
          {renderStructuredValue(item, depth + 1)}
        </PrimitiveCard>
      ))}
    </div>
  );
}

function renderStructuredObject(value: Record<string, unknown>, depth: number): React.ReactNode {
  const entries = Object.entries(value).filter(([, item]) => isPresentValue(item));
  if (!entries.length) return null;

  return (
    <div className={joinClassNames("lander-semantic__field-grid", depth > 0 && "lander-semantic__field-grid--nested")}>
      {entries.map(([key, item]) => (
        <PrimitiveCard className="lander-semantic__field-card" key={key}>
          <span className="lander-semantic__field-label">{fieldKeyLabel(key)}</span>
          {renderStructuredValue(item, depth + 1)}
        </PrimitiveCard>
      ))}
    </div>
  );
}

export function renderStructuredValue(value: unknown, depth = 0): React.ReactNode {
  if (!isPresentValue(value)) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return primitivePreview(value);
  }
  if (Array.isArray(value)) return renderStructuredArray(value, depth);
  if (isRecord(value)) return renderStructuredObject(value, depth);
  return <span className="lander-semantic__field-inline">{String(value)}</span>;
}

export function renderStructuredSection(value: unknown, heading = "Fields"): React.ReactNode {
  if (!isPresentValue(value)) return null;

  return (
    <section className="lander-semantic__structured-section">
      <div className="lander-semantic__section-header">
        <span className="lander-semantic__section-kicker">{valueKindLabel(value)}</span>
        <h2>{heading}</h2>
      </div>
      {renderStructuredValue(value)}
    </section>
  );
}

function previewText(value: unknown): string {
  if (!isPresentValue(value)) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map((entry) => previewText(entry)).filter(Boolean).join(", ");
  if (isRecord(value)) {
    for (const key of ["name", "headline", "title", "text", "url", "@id", "@type", "value"]) {
      const text = previewText(value[key]);
      if (text) return text;
    }
    return JSON.stringify(value);
  }
  return String(value);
}

export function renderSemanticPreviewSection(value: unknown, heading = "Preview"): React.ReactNode {
  if (!isPresentValue(value)) return null;
  const entries = isRecord(value)
    ? Object.entries(value)
      .filter(([, entry]) => isPresentValue(entry))
      .filter(([key]) => !["body", "className", "emitStructuredData", "structuredDataOverrides", "viewModel"].includes(key))
      .slice(0, 6)
    : Array.isArray(value)
      ? value.filter((entry) => isPresentValue(entry)).slice(0, 6).map((entry, index) => [`Item ${index + 1}`, entry] as [string, unknown])
      : [["Value", value] as [string, unknown]];

  if (!entries.length) return null;

  return (
    <section className="lander-semantic__preview-section">
      <div className="lander-semantic__section-header">
        <span className="lander-semantic__section-kicker">{valueKindLabel(value)}</span>
        <h2>{heading}</h2>
      </div>
      <dl className="lander-semantic__preview-list">
        {entries.map(([key, entry]) => (
          <div className="lander-semantic__preview-item" key={key}>
            <dt>{fieldKeyLabel(key)}</dt>
            <dd>{previewText(entry)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function omitRecordKeys<T extends Record<string, unknown>>(value: T, keys: string[]): Partial<T> {
  const omitted = new Set(keys);
  const entries = Object.entries(value).filter(([key, item]) => !omitted.has(key) && isPresentValue(item));
  return Object.fromEntries(entries) as Partial<T>;
}

export function bodyList(items: React.ReactNode[], ordered = false) {
  if (!items.length) return null;
  const List = ordered ? OrderedList : UnorderedList;
  return <List>{items.map((item, index) => <li key={index}>{item}</li>)}</List>;
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
