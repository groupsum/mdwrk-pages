import React from "react";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  joinClassNames,
  renderJsonPreview,
  renderSemanticPreviewSection,
} from "../shared.js";

export interface GeneratedDatatypeViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedDatatypeProps<T = boolean | number | string> {
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<T>;
  viewModel?: GeneratedDatatypeViewModel;
}


export function buildGeneratedDatatypeStructuredData<T>(props: GeneratedDatatypeProps<T>): T {
  return ((props.structuredDataOverrides ?? props.value) as T);
}


interface RenderGeneratedDatatypeCardProps<T> {
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
  viewModel?: GeneratedDatatypeViewModel;
}

export function renderGeneratedDatatypeCard<T>({
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
}: RenderGeneratedDatatypeCardProps<T>) {
  const effectiveValue = ((structuredDataOverrides ?? value) as T);

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
        meta={[{ label: "Value", value: renderJsonPreview(effectiveValue) }]}
        body={
          <>
            {renderSemanticPreviewSection(effectiveValue, "Value")}
            {examples?.length ? renderSemanticPreviewSection(examples, "Examples") : null}
            {body}
          </>
        }
        footer={viewModel?.footer}
      />
    </>
  );
}
