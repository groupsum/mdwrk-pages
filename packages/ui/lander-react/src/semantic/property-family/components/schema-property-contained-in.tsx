import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainedInProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContainedIn({ value, description = "The basic containment relation between a place and one that contains it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContainedInProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contained-in",
    shellClassName: "lander-semantic--schema-property-contained-in",
    title: "containedIn",
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
