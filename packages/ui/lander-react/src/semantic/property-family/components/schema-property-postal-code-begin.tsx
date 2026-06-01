import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeBeginProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostalCodeBegin({ value, description = "First postal code in a range (included).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostalCodeBeginProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeBeginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-begin",
    shellClassName: "lander-semantic--schema-property-postal-code-begin",
    title: "postalCodeBegin",
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
