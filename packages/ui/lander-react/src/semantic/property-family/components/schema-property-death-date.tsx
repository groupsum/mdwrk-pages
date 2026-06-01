import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeathDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDeathDate({ value, description = "Date of death.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDeathDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeathDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-death-date",
    shellClassName: "lander-semantic--schema-property-death-date",
    title: "deathDate",
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
