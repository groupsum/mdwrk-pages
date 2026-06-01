import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SmokingAllowedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySmokingAllowedProps extends SmokingAllowedPropertyInput, GeneratedPropertyUiProps<SmokingAllowedPropertyInput> {}

export function SchemaPropertySmokingAllowed({ value: legacyValue, description = "Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySmokingAllowedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SmokingAllowedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-smoking-allowed",
    shellClassName: "lander-semantic--schema-property-smoking-allowed",
    title: "smokingAllowed",
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
