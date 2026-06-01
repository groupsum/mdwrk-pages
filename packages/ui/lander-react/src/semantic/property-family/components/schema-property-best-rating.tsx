import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBestRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBestRating({ value, description = "The highest value allowed in this rating system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBestRatingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BestRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-best-rating",
    shellClassName: "lander-semantic--schema-property-best-rating",
    title: "bestRating",
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
