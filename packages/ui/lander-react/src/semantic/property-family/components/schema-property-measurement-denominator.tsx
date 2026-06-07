import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MeasurementDenominatorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementDenominatorProps extends MeasurementDenominatorPropertyInput, GeneratedPropertyUiProps<MeasurementDenominatorPropertyInput> {}

export function SchemaPropertyMeasurementDenominator({ value: legacyValue, description = "Identifies the denominator variable when an observation represents a ratio or percentage.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMeasurementDenominatorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMeasurementDenominator as typeof SchemaPropertyMeasurementDenominator & { toStructuredData: (props: SchemaPropertyMeasurementDenominatorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
