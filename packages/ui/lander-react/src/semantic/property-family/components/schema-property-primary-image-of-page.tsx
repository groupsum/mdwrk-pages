import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrimaryImageOfPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrimaryImageOfPage({ value, description = "Indicates the main image on the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrimaryImageOfPageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrimaryImageOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-primary-image-of-page",
    shellClassName: "lander-semantic--schema-property-primary-image-of-page",
    title: "primaryImageOfPage",
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
