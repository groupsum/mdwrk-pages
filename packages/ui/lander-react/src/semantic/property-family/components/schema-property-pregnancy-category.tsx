import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPregnancyCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPregnancyCategory({ value, description = "Pregnancy category of this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPregnancyCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PregnancyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pregnancy-category",
    shellClassName: "lander-semantic--schema-property-pregnancy-category",
    title: "pregnancyCategory",
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
