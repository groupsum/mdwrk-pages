import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCarbohydrateContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCarbohydrateContent({ value, description = "The number of grams of carbohydrates.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCarbohydrateContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CarbohydrateContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-carbohydrate-content",
    shellClassName: "lander-semantic--schema-property-carbohydrate-content",
    title: "carbohydrateContent",
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
