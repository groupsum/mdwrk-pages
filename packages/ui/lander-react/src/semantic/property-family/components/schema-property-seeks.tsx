import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeeksProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySeeks({ value, description = "A pointer to products or services sought by the organization or person (demand).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySeeksProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeeksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-seeks",
    shellClassName: "lander-semantic--schema-property-seeks",
    title: "seeks",
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
