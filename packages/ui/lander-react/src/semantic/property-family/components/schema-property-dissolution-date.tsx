import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDissolutionDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDissolutionDate({ value, description = "The date that this organization was dissolved.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDissolutionDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DissolutionDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dissolution-date",
    shellClassName: "lander-semantic--schema-property-dissolution-date",
    title: "dissolutionDate",
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
