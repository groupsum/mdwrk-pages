import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorksForPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorksForProps extends WorksForPropertyInput, GeneratedPropertyUiProps<WorksForPropertyInput> {}

export function SchemaPropertyWorksFor({ value: legacyValue, description = "Organizations that the person works for.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorksForProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorksForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-works-for",
    shellClassName: "lander-semantic--schema-property-works-for",
    title: "worksFor",
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
