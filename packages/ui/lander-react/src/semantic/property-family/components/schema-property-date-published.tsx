import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatePublishedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDatePublished({ value, description = "Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDatePublishedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatePublishedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-published",
    shellClassName: "lander-semantic--schema-property-date-published",
    title: "datePublished",
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
