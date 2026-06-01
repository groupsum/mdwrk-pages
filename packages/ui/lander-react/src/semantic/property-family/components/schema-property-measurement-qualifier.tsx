import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementQualifierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMeasurementQualifier({ value, description = "Provides additional qualification to an observation. For example, a GDP observation measures the Nominal value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMeasurementQualifierProps) {
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
