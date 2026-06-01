import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpouseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySpouse({ value, description = "The person's spouse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySpouseProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpousePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-spouse",
    shellClassName: "lander-semantic--schema-property-spouse",
    title: "spouse",
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
