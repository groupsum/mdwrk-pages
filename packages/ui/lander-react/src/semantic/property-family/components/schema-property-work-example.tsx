import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorkExamplePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkExampleProps extends WorkExamplePropertyInput, GeneratedPropertyUiProps<WorkExamplePropertyInput> {}

export function SchemaPropertyWorkExample({ value: legacyValue, description = "Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorkExampleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkExamplePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-example",
    shellClassName: "lander-semantic--schema-property-work-example",
    title: "workExample",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
