import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCircleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCircle({ value, description = "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCircleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CirclePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-circle",
    shellClassName: "lander-semantic--schema-property-circle",
    title: "circle",
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
