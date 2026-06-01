import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProteinContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProteinContent({ value, description = "The number of grams of protein.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProteinContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProteinContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-protein-content",
    shellClassName: "lander-semantic--schema-property-protein-content",
    title: "proteinContent",
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
