import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVersionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVersion({ value, description = "The version of the CreativeWork embodied by a specified resource.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVersionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VersionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-version",
    shellClassName: "lander-semantic--schema-property-version",
    title: "version",
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
