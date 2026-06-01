import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemReviewedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemReviewed({ value, description = "The item that is being reviewed/rated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemReviewedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemReviewedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-reviewed",
    shellClassName: "lander-semantic--schema-property-item-reviewed",
    title: "itemReviewed",
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
