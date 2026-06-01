import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AwardsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAwardsProps extends AwardsPropertyInput, GeneratedPropertyUiProps<AwardsPropertyInput> {}

export function SchemaPropertyAwards({ value: legacyValue, description = "Awards won by or for this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAwardsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AwardsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-awards",
    shellClassName: "lander-semantic--schema-property-awards",
    title: "awards",
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
