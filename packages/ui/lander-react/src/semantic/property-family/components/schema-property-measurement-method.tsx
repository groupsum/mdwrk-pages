import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MeasurementMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementMethodProps extends MeasurementMethodPropertyInput, GeneratedPropertyUiProps<MeasurementMethodPropertyInput> {}

export function SchemaPropertyMeasurementMethod({ value: legacyValue, description = "A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMeasurementMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MeasurementMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-measurement-method",
    shellClassName: "lander-semantic--schema-property-measurement-method",
    title: "measurementMethod",
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
