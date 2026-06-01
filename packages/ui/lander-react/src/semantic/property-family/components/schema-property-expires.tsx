import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpiresProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExpires({ value, description = "Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExpiresProps) {
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
