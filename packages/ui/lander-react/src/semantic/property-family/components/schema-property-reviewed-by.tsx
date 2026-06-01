import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviewedBy({ value, description = "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewedByProps) {
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
