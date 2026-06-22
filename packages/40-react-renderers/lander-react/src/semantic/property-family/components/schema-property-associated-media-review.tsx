import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedMediaReviewPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedMediaReviewProps extends AssociatedMediaReviewPropertyInput, GeneratedPropertyUiProps<AssociatedMediaReviewPropertyInput> {}

export function SchemaPropertyAssociatedMediaReview({ value: legacyValue, description = "An associated [[MediaReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[associatedClaimReview]] would be used on [[MediaReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedMediaReviewProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAssociatedMediaReview as typeof SchemaPropertyAssociatedMediaReview & { toStructuredData: (props: SchemaPropertyAssociatedMediaReviewProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
