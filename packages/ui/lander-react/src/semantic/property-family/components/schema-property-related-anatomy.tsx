import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedAnatomyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedAnatomyProps extends RelatedAnatomyPropertyInput, GeneratedPropertyUiProps<RelatedAnatomyPropertyInput> {}

export function SchemaPropertyRelatedAnatomy({ value: legacyValue, description = "Anatomical systems or structures that relate to the superficial anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedAnatomyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedAnatomyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-anatomy",
    shellClassName: "lander-semantic--schema-property-related-anatomy",
    title: "relatedAnatomy",
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
