import React from "react";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  joinClassNames,
  renderJsonPreview,
  renderStructuredSection,
} from "../shared.js";

export interface GeneratedEnumerationViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedEnumerationProps<T = string> {
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: GeneratedEnumerationViewModel;
}

interface RenderGeneratedEnumerationCardProps<T> {
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
  viewModel?: GeneratedEnumerationViewModel;
}

export function renderGeneratedEnumerationCard<T>({
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
}: RenderGeneratedEnumerationCardProps<T>) {
  const effectiveValue = ((structuredDataOverrides ?? value) as T);

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
        meta={[{ label: "Value", value: renderJsonPreview(effectiveValue) }]}
        body={
          <>
            {renderStructuredSection(effectiveValue, "Value")}
            {examples?.length ? renderStructuredSection(examples, "Examples") : null}
            {body}
          </>
        }
        footer={viewModel?.footer}
      />
    </>
  );
}
