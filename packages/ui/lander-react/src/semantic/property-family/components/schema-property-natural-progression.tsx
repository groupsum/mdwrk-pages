import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNaturalProgressionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNaturalProgression({ value, description = "The expected progression of the condition if it is not treated and allowed to progress naturally.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNaturalProgressionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NaturalProgressionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-natural-progression",
    shellClassName: "lander-semantic--schema-property-natural-progression",
    title: "naturalProgression",
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
