import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSystemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPartOfSystem({ value, description = "The anatomical or organ system that this structure is part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPartOfSystemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-system",
    shellClassName: "lander-semantic--schema-property-part-of-system",
    title: "partOfSystem",
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
