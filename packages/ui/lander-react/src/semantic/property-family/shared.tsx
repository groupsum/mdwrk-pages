import React from "react";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  isRecord,
  mergeRecordLike,
  joinClassNames,
  renderJsonPreview,
  renderSemanticPreviewSection,
} from "../shared.js";

export interface GeneratedPropertyViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedPropertyUiProps<T = Record<string, unknown>> {
  value?: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: GeneratedPropertyViewModel;
}

export type GeneratedPropertyProps<T = Record<string, unknown>> = GeneratedPropertyUiProps<T> & T;


const generatedPropertyUiPropKeys = new Set([
  "body",
  "className",
  "description",
  "emitStructuredData",
  "examples",
  "structuredDataOverrides",
  "value",
  "viewModel",
]);

export function buildGeneratedPropertyStructuredData<T>(props: GeneratedPropertyProps<T>): T {
  const record = props as Record<string, unknown>;
  const explicitValue = record.value as T | undefined;
  const directValue = Object.fromEntries(
    Object.entries(record).filter(([key]) => !generatedPropertyUiPropKeys.has(key)),
  ) as T;
  const value = Object.keys(directValue as Record<string, unknown>).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...(explicitValue as Record<string, unknown>), ...(directValue as Record<string, unknown>) } as T
      : directValue
    : ((explicitValue ?? directValue) as T);

  return isRecord(value) && isRecord(props.structuredDataOverrides)
    ? mergeRecordLike(value, props.structuredDataOverrides)
    : ((props.structuredDataOverrides ?? value) as T);
}


interface RenderGeneratedPropertyCardProps<T> {
  StructuredDataComponent: React.ComponentType<{ data: unknown }>;
  defaultEyebrow: string;
  kind: string;
  shellClassName: string;
  title: string;
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: GeneratedPropertyViewModel;
}

export function renderGeneratedPropertyCard<T>({
  StructuredDataComponent,
  defaultEyebrow,
  kind,
  shellClassName,
  title,
  value,
  description,
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: RenderGeneratedPropertyCardProps<T>) {
  const effectiveValue = isRecord(value) && isRecord(structuredDataOverrides)
    ? mergeRecordLike(value, structuredDataOverrides)
    : ((structuredDataOverrides ?? value) as T);

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData} node={effectiveValue}>
        <StructuredDataComponent data={effectiveValue as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind={kind}
        title={title}
        eyebrow={viewModel?.eyebrow ?? defaultEyebrow}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames(shellClassName, className)}
        meta={isRecord(effectiveValue) ? undefined : [{ label: "Value", value: renderJsonPreview(effectiveValue) }]}
        body={
          <>
            {renderSemanticPreviewSection(effectiveValue)}
            {examples?.length ? renderSemanticPreviewSection(examples, "Examples") : null}
            {body}
          </>
        }
        footer={viewModel?.footer}
      />
    </>
  );
}
