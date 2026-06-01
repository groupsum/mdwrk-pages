import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExpiresPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpiresProps extends ExpiresPropertyInput, GeneratedPropertyUiProps<ExpiresPropertyInput> {}

export function SchemaPropertyExpires({ value: legacyValue, description = "Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExpiresProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpiresPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expires",
    shellClassName: "lander-semantic--schema-property-expires",
    title: "expires",
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
