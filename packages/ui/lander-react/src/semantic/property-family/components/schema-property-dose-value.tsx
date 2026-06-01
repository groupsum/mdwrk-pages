import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDoseValue({ value, description = "The value of the dose, e.g. 500.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDoseValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-value",
    shellClassName: "lander-semantic--schema-property-dose-value",
    title: "doseValue",
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
