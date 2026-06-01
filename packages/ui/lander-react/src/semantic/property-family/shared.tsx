import React from "react";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  isRecord,
  mergeRecordLike,
  joinClassNames,
  renderJsonPreview,
  renderStructuredSection,
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
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
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
            {renderStructuredSection(effectiveValue)}
            {examples?.length ? renderStructuredSection(examples, "Examples") : null}
            {body}
          </>
        }
        footer={viewModel?.footer}
      />
    </>
  );
}
