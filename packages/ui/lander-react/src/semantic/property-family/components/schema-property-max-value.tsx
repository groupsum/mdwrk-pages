import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaxValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaxValue({ value, description = "The upper value of some characteristic or property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaxValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaxValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-max-value",
    shellClassName: "lander-semantic--schema-property-max-value",
    title: "maxValue",
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
