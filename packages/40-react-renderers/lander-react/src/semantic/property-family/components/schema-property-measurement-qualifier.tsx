import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MeasurementQualifierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementQualifierProps extends MeasurementQualifierPropertyInput, GeneratedPropertyUiProps<MeasurementQualifierPropertyInput> {}

export function SchemaPropertyMeasurementQualifier({ value: legacyValue, description = "Provides additional qualification to an observation. For example, a GDP observation measures the Nominal value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMeasurementQualifierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MeasurementQualifierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-measurement-qualifier",
    shellClassName: "lander-semantic--schema-property-measurement-qualifier",
    title: "measurementQualifier",
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

(SchemaPropertyMeasurementQualifier as typeof SchemaPropertyMeasurementQualifier & { toStructuredData: (props: SchemaPropertyMeasurementQualifierProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
