import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementDenominatorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMeasurementDenominator({ value, description = "Identifies the denominator variable when an observation represents a ratio or percentage.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMeasurementDenominatorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MeasurementDenominatorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-measurement-denominator",
    shellClassName: "lander-semantic--schema-property-measurement-denominator",
    title: "measurementDenominator",
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
