import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNonprofitStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNonprofitStatus({ value, description = "nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNonprofitStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NonprofitStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nonprofit-status",
    shellClassName: "lander-semantic--schema-property-nonprofit-status",
    title: "nonprofitStatus",
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
