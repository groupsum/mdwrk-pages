import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStrengthValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStrengthValue({ value, description = "The value of an active ingredient's strength, e.g. 325.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStrengthValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StrengthValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-strength-value",
    shellClassName: "lander-semantic--schema-property-strength-value",
    title: "strengthValue",
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
