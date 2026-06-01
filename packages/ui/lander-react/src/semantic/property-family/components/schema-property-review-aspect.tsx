import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewAspectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviewAspect({ value, description = "This Review or Rating is relevant to this part or facet of the itemReviewed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewAspectProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewAspectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-aspect",
    shellClassName: "lander-semantic--schema-property-review-aspect",
    title: "reviewAspect",
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
