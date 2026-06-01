import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCorrectionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCorrection({ value, description = "Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCorrectionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CorrectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-correction",
    shellClassName: "lander-semantic--schema-property-correction",
    title: "correction",
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
