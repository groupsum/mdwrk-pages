import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLongitudeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLongitude({ value, description = "The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLongitudeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LongitudePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-longitude",
    shellClassName: "lander-semantic--schema-property-longitude",
    title: "longitude",
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
