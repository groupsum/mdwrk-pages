import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOwner({ value, description = "A person or organization who owns this Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOwnerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-owner",
    shellClassName: "lander-semantic--schema-property-owner",
    title: "owner",
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
