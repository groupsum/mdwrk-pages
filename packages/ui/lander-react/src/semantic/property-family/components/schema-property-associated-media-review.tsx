import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedMediaReviewProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedMediaReview({ value, description = "An associated [[MediaReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[associatedClaimReview]] would be used on [[MediaReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedMediaReviewProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedMediaReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-media-review",
    shellClassName: "lander-semantic--schema-property-associated-media-review",
    title: "associatedMediaReview",
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
