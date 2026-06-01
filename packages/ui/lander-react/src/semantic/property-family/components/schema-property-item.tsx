import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItem({ value, description = "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item",
    shellClassName: "lander-semantic--schema-property-item",
    title: "item",
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
