import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasurementMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMeasurementMethod({ value, description = "A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMeasurementMethodProps) {
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
