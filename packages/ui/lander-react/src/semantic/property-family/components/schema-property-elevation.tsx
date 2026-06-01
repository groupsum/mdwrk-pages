import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyElevationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyElevation({ value, description = "The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\\_OF\\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyElevationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ElevationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-elevation",
    shellClassName: "lander-semantic--schema-property-elevation",
    title: "elevation",
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
