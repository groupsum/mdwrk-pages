import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBoxProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBox({ value, description = "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBoxProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BoxPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-box",
    shellClassName: "lander-semantic--schema-property-box",
    title: "box",
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
