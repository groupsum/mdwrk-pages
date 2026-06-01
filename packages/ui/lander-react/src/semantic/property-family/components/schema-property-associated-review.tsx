import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedReviewProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedReview({ value, description = "An associated [[Review]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedReviewProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-review",
    shellClassName: "lander-semantic--schema-property-associated-review",
    title: "associatedReview",
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
