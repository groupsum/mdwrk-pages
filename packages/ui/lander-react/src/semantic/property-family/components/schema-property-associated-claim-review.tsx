import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedClaimReviewProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedClaimReview({ value, description = "An associated [[ClaimReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[associatedClaimReview]] would be used on [[MediaReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedClaimReviewProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedClaimReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-claim-review",
    shellClassName: "lander-semantic--schema-property-associated-claim-review",
    title: "associatedClaimReview",
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
