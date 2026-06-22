import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StrengthValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStrengthValueProps extends StrengthValuePropertyInput, GeneratedPropertyUiProps<StrengthValuePropertyInput> {}

export function SchemaPropertyStrengthValue({ value: legacyValue, description = "The value of an active ingredient's strength, e.g. 325.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStrengthValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StrengthValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-strength-value",
    shellClassName: "lander-semantic--schema-property-strength-value",
    title: "strengthValue",
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

(SchemaPropertyStrengthValue as typeof SchemaPropertyStrengthValue & { toStructuredData: (props: SchemaPropertyStrengthValueProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
