import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface MeasurementMethodEnumProps extends GeneratedEnumerationProps<string> {}

export function MeasurementMethodEnum({ value, description = "Enumeration(s) for use with [[measurementMethod]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MeasurementMethodEnumProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MeasurementMethodEnumStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-measurement-method-enum",
    shellClassName: "lander-semantic--schema-enumeration-measurement-method-enum",
    title: "MeasurementMethodEnum",
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
