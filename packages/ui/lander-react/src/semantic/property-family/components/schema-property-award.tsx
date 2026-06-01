import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AwardPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAwardProps extends AwardPropertyInput, GeneratedPropertyUiProps<AwardPropertyInput> {}

export function SchemaPropertyAward({ value: legacyValue, description = "An award won by or for this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAwardProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AwardPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-award",
    shellClassName: "lander-semantic--schema-property-award",
    title: "award",
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
