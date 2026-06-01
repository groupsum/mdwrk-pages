import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeasonNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySeasonNumber({ value, description = "Position of the season within an ordered group of seasons.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySeasonNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeasonNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-season-number",
    shellClassName: "lander-semantic--schema-property-season-number",
    title: "seasonNumber",
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
