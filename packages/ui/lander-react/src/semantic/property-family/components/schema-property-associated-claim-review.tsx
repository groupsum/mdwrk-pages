import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedClaimReviewPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedClaimReviewProps extends AssociatedClaimReviewPropertyInput, GeneratedPropertyUiProps<AssociatedClaimReviewPropertyInput> {}

export function SchemaPropertyAssociatedClaimReview({ value: legacyValue, description = "An associated [[ClaimReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[associatedClaimReview]] would be used on [[MediaReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedClaimReviewProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
