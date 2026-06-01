import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeRangeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostalCodeRange({ value, description = "A defined range of postal codes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostalCodeRangeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-range",
    shellClassName: "lander-semantic--schema-property-postal-code-range",
    title: "postalCodeRange",
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
