import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodePrefixProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostalCodePrefix({ value, description = "A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostalCodePrefixProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodePrefixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-prefix",
    shellClassName: "lander-semantic--schema-property-postal-code-prefix",
    title: "postalCodePrefix",
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
