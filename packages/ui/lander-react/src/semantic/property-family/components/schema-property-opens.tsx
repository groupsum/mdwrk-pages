import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOpensProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOpens({ value, description = "The opening hour of the place or service on the given day(s) of the week.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOpensProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OpensPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-opens",
    shellClassName: "lander-semantic--schema-property-opens",
    title: "opens",
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
