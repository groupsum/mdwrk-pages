import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SignDetectedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignDetectedProps extends SignDetectedPropertyInput, GeneratedPropertyUiProps<SignDetectedPropertyInput> {}

export function SchemaPropertySignDetected({ value: legacyValue, description = "A sign detected by the test.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySignDetectedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySignDetected as typeof SchemaPropertySignDetected & { toStructuredData: (props: SchemaPropertySignDetectedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
