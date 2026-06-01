import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeEndProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostalCodeEnd({ value, description = "Last postal code in the range (included). Needs to be after [[postalCodeBegin]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostalCodeEndProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeEndPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-end",
    shellClassName: "lander-semantic--schema-property-postal-code-end",
    title: "postalCodeEnd",
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
