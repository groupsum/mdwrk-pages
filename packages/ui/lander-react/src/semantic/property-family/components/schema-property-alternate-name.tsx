import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternateNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlternateName({ value, description = "An alias for the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlternateNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternateNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternate-name",
    shellClassName: "lander-semantic--schema-property-alternate-name",
    title: "alternateName",
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
