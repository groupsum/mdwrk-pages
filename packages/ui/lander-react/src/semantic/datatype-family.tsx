import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, joinClassNames, renderJsonPreview } from "./shared.js";

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
  structuredDataOverrides?: T;
  viewModel?: GeneratedDatatypeViewModel;
}

export interface BooleanProps extends GeneratedDatatypeProps<boolean> {}
export function Boolean({
  value,
  description = "Boolean: True or False.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: BooleanProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.BooleanStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-boolean"
        title="Boolean"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-boolean", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DateProps extends GeneratedDatatypeProps<string> {}
export function Date({
  value,
  description = "A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DateProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DateStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-date"
        title="Date"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-date", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DateTimeProps extends GeneratedDatatypeProps<string> {}
export function DateTime({
  value,
  description = "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DateTimeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DateTimeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-date-time"
        title="DateTime"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-date-time", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface NumberProps extends GeneratedDatatypeProps<number> {}
export function Number({
  value,
  description = "Data type: Number.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: NumberProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.NumberStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-number"
        title="Number"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-number", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface QuantityProps extends GeneratedDatatypeProps<number | string> {}
export function Quantity({
  value,
  description = "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are strings like '3 kg' or '4 milligrams'.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: QuantityProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.QuantityStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-quantity"
        title="Quantity"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-quantity", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface TextProps extends GeneratedDatatypeProps<string> {}
export function Text({
  value,
  description = "Data type: Text.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: TextProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.TextStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-text"
        title="Text"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-text", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface TimeProps extends GeneratedDatatypeProps<string> {}
export function Time({
  value,
  description = "A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time)).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: TimeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.TimeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-datatype-time"
        title="Time"
        eyebrow={viewModel?.eyebrow ?? "Datatype"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-datatype-time", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}


