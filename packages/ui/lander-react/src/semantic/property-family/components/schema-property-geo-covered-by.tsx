import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGeoCoveredByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGeoCoveredBy({ value, description = "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGeoCoveredByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GeoCoveredByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-geo-covered-by",
    shellClassName: "lander-semantic--schema-property-geo-covered-by",
    title: "geoCoveredBy",
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
