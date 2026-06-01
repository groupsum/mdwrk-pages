import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationSubCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplicationSubCategory({ value, description = "Subcategory of the application, e.g. 'Arcade Game'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicationSubCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationSubCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application-sub-category",
    shellClassName: "lander-semantic--schema-property-application-sub-category",
    title: "applicationSubCategory",
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
