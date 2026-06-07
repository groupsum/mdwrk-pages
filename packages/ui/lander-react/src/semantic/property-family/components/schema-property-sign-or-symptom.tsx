import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SignOrSymptomPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignOrSymptomProps extends SignOrSymptomPropertyInput, GeneratedPropertyUiProps<SignOrSymptomPropertyInput> {}

export function SchemaPropertySignOrSymptom({ value: legacyValue, description = "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySignOrSymptomProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignOrSymptomPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sign-or-symptom",
    shellClassName: "lander-semantic--schema-property-sign-or-symptom",
    title: "signOrSymptom",
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

(SchemaPropertySignOrSymptom as typeof SchemaPropertySignOrSymptom & { toStructuredData: (props: SchemaPropertySignOrSymptomProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
