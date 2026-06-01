import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaterialExtentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaterialExtent({ value, description = "The quantity of the materials being described or an expression of the physical space they occupy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaterialExtentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaterialExtentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-material-extent",
    shellClassName: "lander-semantic--schema-property-material-extent",
    title: "materialExtent",
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
