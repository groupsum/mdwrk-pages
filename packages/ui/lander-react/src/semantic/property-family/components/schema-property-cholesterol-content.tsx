import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCholesterolContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCholesterolContent({ value, description = "The number of milligrams of cholesterol.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCholesterolContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CholesterolContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cholesterol-content",
    shellClassName: "lander-semantic--schema-property-cholesterol-content",
    title: "cholesterolContent",
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
