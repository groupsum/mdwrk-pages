import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainsPlaceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContainsPlace({ value, description = "The basic containment relation between a place and another that it contains.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContainsPlaceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainsPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contains-place",
    shellClassName: "lander-semantic--schema-property-contains-place",
    title: "containsPlace",
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
