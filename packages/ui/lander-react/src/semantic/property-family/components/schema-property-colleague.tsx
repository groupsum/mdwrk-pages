import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColleagueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyColleague({ value, description = "A colleague of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyColleagueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColleaguePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-colleague",
    shellClassName: "lander-semantic--schema-property-colleague",
    title: "colleague",
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
