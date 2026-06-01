import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsPartOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsPartOf({ value, description = "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsPartOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsPartOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-part-of",
    shellClassName: "lander-semantic--schema-property-is-part-of",
    title: "isPartOf",
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
