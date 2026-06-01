import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasDefinedTermProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasDefinedTerm({ value, description = "A Defined Term contained in this term set.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasDefinedTermProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasDefinedTermPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-defined-term",
    shellClassName: "lander-semantic--schema-property-has-defined-term",
    title: "hasDefinedTerm",
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
