import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasRepresentationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasRepresentation({ value, description = "A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasRepresentationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasRepresentationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-representation",
    shellClassName: "lander-semantic--schema-property-has-representation",
    title: "hasRepresentation",
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
