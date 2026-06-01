import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelevantSpecialtyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelevantSpecialtyProps extends RelevantSpecialtyPropertyInput, GeneratedPropertyUiProps<RelevantSpecialtyPropertyInput> {}

export function SchemaPropertyRelevantSpecialty({ value: legacyValue, description = "If applicable, a medical specialty in which this entity is relevant.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelevantSpecialtyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelevantSpecialtyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-relevant-specialty",
    shellClassName: "lander-semantic--schema-property-relevant-specialty",
    title: "relevantSpecialty",
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
