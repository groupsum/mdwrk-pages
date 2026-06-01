import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundingDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFoundingDate({ value, description = "The date that this organization was founded.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFoundingDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundingDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founding-date",
    shellClassName: "lander-semantic--schema-property-founding-date",
    title: "foundingDate",
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
