import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAppearanceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAppearance({ value, description = "Indicates an occurrence of a [[Claim]] in some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAppearanceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AppearancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-appearance",
    shellClassName: "lander-semantic--schema-property-appearance",
    title: "appearance",
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
