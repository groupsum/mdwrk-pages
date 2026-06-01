import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFirstAppearanceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFirstAppearance({ value, description = "Indicates the first known occurrence of a [[Claim]] in some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFirstAppearanceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FirstAppearancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-first-appearance",
    shellClassName: "lander-semantic--schema-property-first-appearance",
    title: "firstAppearance",
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
