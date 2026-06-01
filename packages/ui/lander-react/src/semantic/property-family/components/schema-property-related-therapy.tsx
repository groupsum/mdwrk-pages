import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedTherapyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedTherapyProps extends RelatedTherapyPropertyInput, GeneratedPropertyUiProps<RelatedTherapyPropertyInput> {}

export function SchemaPropertyRelatedTherapy({ value: legacyValue, description = "A medical therapy related to this anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedTherapyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedTherapyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-therapy",
    shellClassName: "lander-semantic--schema-property-related-therapy",
    title: "relatedTherapy",
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
