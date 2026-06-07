import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiredGenderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredGenderProps extends RequiredGenderPropertyInput, GeneratedPropertyUiProps<RequiredGenderPropertyInput> {}

export function SchemaPropertyRequiredGender({ value: legacyValue, description = "Audiences defined by a person's gender.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiredGenderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredGenderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-gender",
    shellClassName: "lander-semantic--schema-property-required-gender",
    title: "requiredGender",
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

(SchemaPropertyRequiredGender as typeof SchemaPropertyRequiredGender & { toStructuredData: (props: SchemaPropertyRequiredGenderProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
