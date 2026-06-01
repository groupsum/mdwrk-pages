import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReview({ value, description = "A review of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review",
    shellClassName: "lander-semantic--schema-property-review",
    title: "review",
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
