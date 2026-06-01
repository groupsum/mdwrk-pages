import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLastReviewedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLastReviewed({ value, description = "Date on which the content on this web page was last reviewed for accuracy and/or completeness.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLastReviewedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LastReviewedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-last-reviewed",
    shellClassName: "lander-semantic--schema-property-last-reviewed",
    title: "lastReviewed",
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
