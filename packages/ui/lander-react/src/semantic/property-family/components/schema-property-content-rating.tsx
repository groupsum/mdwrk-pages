import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContentRating({ value, description = "Official rating of a piece of content&#x2014;for example, 'MPAA PG-13'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContentRatingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-rating",
    shellClassName: "lander-semantic--schema-property-content-rating",
    title: "contentRating",
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
