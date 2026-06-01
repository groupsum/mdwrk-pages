import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOwns({ value, description = "Things owned by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOwnsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-owns",
    shellClassName: "lander-semantic--schema-property-owns",
    title: "owns",
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
