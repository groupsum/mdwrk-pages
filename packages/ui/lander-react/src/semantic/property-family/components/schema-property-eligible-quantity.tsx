import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EligibleQuantityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleQuantityProps extends EligibleQuantityPropertyInput, GeneratedPropertyUiProps<EligibleQuantityPropertyInput> {}

export function SchemaPropertyEligibleQuantity({ value: legacyValue, description = "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEligibleQuantityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleQuantityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-quantity",
    shellClassName: "lander-semantic--schema-property-eligible-quantity",
    title: "eligibleQuantity",
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

(SchemaPropertyEligibleQuantity as typeof SchemaPropertyEligibleQuantity & { toStructuredData: (props: SchemaPropertyEligibleQuantityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
