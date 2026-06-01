import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClipNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyClipNumber({ value, description = "Position of the clip within an ordered group of clips.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyClipNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClipNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-clip-number",
    shellClassName: "lander-semantic--schema-property-clip-number",
    title: "clipNumber",
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
