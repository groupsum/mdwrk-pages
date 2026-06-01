import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLatitudeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLatitude({ value, description = "The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLatitudeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LatitudePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-latitude",
    shellClassName: "lander-semantic--schema-property-latitude",
    title: "latitude",
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
