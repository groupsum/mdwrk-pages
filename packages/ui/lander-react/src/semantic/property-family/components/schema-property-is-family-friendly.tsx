import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsFamilyFriendlyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsFamilyFriendly({ value, description = "Indicates whether this content is family friendly.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsFamilyFriendlyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsFamilyFriendlyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-family-friendly",
    shellClassName: "lander-semantic--schema-property-is-family-friendly",
    title: "isFamilyFriendly",
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
