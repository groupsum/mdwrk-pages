import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternativeHeadlineProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlternativeHeadline({ value, description = "A secondary title of the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlternativeHeadlineProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternativeHeadlinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternative-headline",
    shellClassName: "lander-semantic--schema-property-alternative-headline",
    title: "alternativeHeadline",
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
