import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReferenceQuantityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReferenceQuantity({ value, description = "The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReferenceQuantityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReferenceQuantityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-reference-quantity",
    shellClassName: "lander-semantic--schema-property-reference-quantity",
    title: "referenceQuantity",
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
