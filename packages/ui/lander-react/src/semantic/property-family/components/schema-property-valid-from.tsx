import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValidFromPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidFromProps extends ValidFromPropertyInput, GeneratedPropertyUiProps<ValidFromPropertyInput> {}

export function SchemaPropertyValidFrom({ value: legacyValue, description = "The date when the item becomes valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValidFromProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidFromPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-from",
    shellClassName: "lander-semantic--schema-property-valid-from",
    title: "validFrom",
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
