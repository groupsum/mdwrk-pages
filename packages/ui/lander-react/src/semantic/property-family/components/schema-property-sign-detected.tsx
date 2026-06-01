import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignDetectedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySignDetected({ value, description = "A sign detected by the test.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySignDetectedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignDetectedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sign-detected",
    shellClassName: "lander-semantic--schema-property-sign-detected",
    title: "signDetected",
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
