import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidThroughProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValidThrough({ value, description = "The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValidThroughProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidThroughPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-through",
    shellClassName: "lander-semantic--schema-property-valid-through",
    title: "validThrough",
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
