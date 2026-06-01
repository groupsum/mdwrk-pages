import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGuidelineDate({ value, description = "Date on which this guideline's recommendation was made.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGuidelineDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelineDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline-date",
    shellClassName: "lander-semantic--schema-property-guideline-date",
    title: "guidelineDate",
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
