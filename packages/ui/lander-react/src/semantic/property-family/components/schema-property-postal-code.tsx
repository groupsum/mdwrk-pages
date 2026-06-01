import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostalCode({ value, description = "The postal code. For example, 94043.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostalCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code",
    shellClassName: "lander-semantic--schema-property-postal-code",
    title: "postalCode",
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
