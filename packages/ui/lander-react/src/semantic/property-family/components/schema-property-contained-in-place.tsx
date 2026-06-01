import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainedInPlaceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContainedInPlace({ value, description = "The basic containment relation between a place and one that contains it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContainedInPlaceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainedInPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contained-in-place",
    shellClassName: "lander-semantic--schema-property-contained-in-place",
    title: "containedInPlace",
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
