import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplicationCategory({ value, description = "Type of software application, e.g. 'Game, Multimedia'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicationCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application-category",
    shellClassName: "lander-semantic--schema-property-application-category",
    title: "applicationCategory",
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
