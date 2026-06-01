import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHeadlineProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHeadline({ value, description = "Headline of the article.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHeadlineProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HeadlinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-headline",
    shellClassName: "lander-semantic--schema-property-headline",
    title: "headline",
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
