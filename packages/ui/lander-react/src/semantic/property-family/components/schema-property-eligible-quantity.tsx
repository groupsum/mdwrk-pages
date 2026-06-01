import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleQuantityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEligibleQuantity({ value, description = "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEligibleQuantityProps) {
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
