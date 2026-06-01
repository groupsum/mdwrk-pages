import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMapTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMapType({ value, description = "Indicates the kind of Map, from the MapCategoryType Enumeration.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMapTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MapTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-map-type",
    shellClassName: "lander-semantic--schema-property-map-type",
    title: "mapType",
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
