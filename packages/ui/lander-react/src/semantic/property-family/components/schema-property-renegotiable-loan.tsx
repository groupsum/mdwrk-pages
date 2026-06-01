import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RenegotiableLoanPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRenegotiableLoanProps extends RenegotiableLoanPropertyInput, GeneratedPropertyUiProps<RenegotiableLoanPropertyInput> {}

export function SchemaPropertyRenegotiableLoan({ value: legacyValue, description = "Whether the terms for payment of interest can be renegotiated during the life of the loan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRenegotiableLoanProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RenegotiableLoanPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-renegotiable-loan",
    shellClassName: "lander-semantic--schema-property-renegotiable-loan",
    title: "renegotiableLoan",
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
