import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GuidelinePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineProps extends GuidelinePropertyInput, GeneratedPropertyUiProps<GuidelinePropertyInput> {}

export function SchemaPropertyGuideline({ value: legacyValue, description = "A medical guideline related to this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGuidelineProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline",
    shellClassName: "lander-semantic--schema-property-guideline",
    title: "guideline",
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
