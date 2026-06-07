import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UsedToDiagnosePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsedToDiagnoseProps extends UsedToDiagnosePropertyInput, GeneratedPropertyUiProps<UsedToDiagnosePropertyInput> {}

export function SchemaPropertyUsedToDiagnose({ value: legacyValue, description = "A condition the test is used to diagnose.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUsedToDiagnoseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UsedToDiagnosePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-used-to-diagnose",
    shellClassName: "lander-semantic--schema-property-used-to-diagnose",
    title: "usedToDiagnose",
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

(SchemaPropertyUsedToDiagnose as typeof SchemaPropertyUsedToDiagnose & { toStructuredData: (props: SchemaPropertyUsedToDiagnoseProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
