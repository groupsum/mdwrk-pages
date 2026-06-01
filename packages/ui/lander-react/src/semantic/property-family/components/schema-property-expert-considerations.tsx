import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExpertConsiderationsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpertConsiderationsProps extends ExpertConsiderationsPropertyInput, GeneratedPropertyUiProps<ExpertConsiderationsPropertyInput> {}

export function SchemaPropertyExpertConsiderations({ value: legacyValue, description = "Medical expert advice related to the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExpertConsiderationsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpertConsiderationsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expert-considerations",
    shellClassName: "lander-semantic--schema-property-expert-considerations",
    title: "expertConsiderations",
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
