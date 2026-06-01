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

export interface GeneratedTypeViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedTypeUiProps<T = Record<string, unknown>> {
  value?: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: GeneratedTypeViewModel;
}

export type GeneratedTypeProps<T = Record<string, unknown>> = GeneratedTypeUiProps<T> & T;

interface RenderGeneratedTypeCardProps<T> {
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
  viewModel?: GeneratedTypeViewModel;
}

export function renderGeneratedTypeCard<T>({
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
}: RenderGeneratedTypeCardProps<T>) {
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
