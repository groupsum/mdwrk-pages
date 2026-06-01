import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewBodyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviewBody({ value, description = "The actual body of the review.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewBodyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewBodyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-body",
    shellClassName: "lander-semantic--schema-property-review-body",
    title: "reviewBody",
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
