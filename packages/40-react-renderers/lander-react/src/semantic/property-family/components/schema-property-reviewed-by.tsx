import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewedByProps extends ReviewedByPropertyInput, GeneratedPropertyUiProps<ReviewedByPropertyInput> {}

export function SchemaPropertyReviewedBy({ value: legacyValue, description = "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-reviewed-by",
    shellClassName: "lander-semantic--schema-property-reviewed-by",
    title: "reviewedBy",
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

(SchemaPropertyReviewedBy as typeof SchemaPropertyReviewedBy & { toStructuredData: (props: SchemaPropertyReviewedByProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
