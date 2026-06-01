import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFunderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFunder({ value, description = "A person or organization that supports (sponsors) something through some kind of financial contribution.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFunderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FunderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-funder",
    shellClassName: "lander-semantic--schema-property-funder",
    title: "funder",
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
