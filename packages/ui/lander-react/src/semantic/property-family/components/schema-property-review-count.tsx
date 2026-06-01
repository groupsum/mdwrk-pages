import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviewCount({ value, description = "The count of total number of reviews.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-count",
    shellClassName: "lander-semantic--schema-property-review-count",
    title: "reviewCount",
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
