import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFiberContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFiberContent({ value, description = "The number of grams of fiber.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFiberContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FiberContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fiber-content",
    shellClassName: "lander-semantic--schema-property-fiber-content",
    title: "fiberContent",
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
