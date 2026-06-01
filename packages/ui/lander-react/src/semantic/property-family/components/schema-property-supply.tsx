import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SupplyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupplyProps extends SupplyPropertyInput, GeneratedPropertyUiProps<SupplyPropertyInput> {}

export function SchemaPropertySupply({ value: legacyValue, description = "A sub-property of instrument. A supply consumed when performing instructions or a direction.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySupplyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SupplyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-supply",
    shellClassName: "lander-semantic--schema-property-supply",
    title: "supply",
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
