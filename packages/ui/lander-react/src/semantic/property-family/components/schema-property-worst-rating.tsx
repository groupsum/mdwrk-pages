import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorstRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorstRating({ value, description = "The lowest value allowed in this rating system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorstRatingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorstRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-worst-rating",
    shellClassName: "lander-semantic--schema-property-worst-rating",
    title: "worstRating",
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
