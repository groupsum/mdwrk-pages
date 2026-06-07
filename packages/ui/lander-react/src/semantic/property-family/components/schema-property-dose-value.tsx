import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoseValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseValueProps extends DoseValuePropertyInput, GeneratedPropertyUiProps<DoseValuePropertyInput> {}

export function SchemaPropertyDoseValue({ value: legacyValue, description = "The value of the dose, e.g. 500.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDoseValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-value",
    shellClassName: "lander-semantic--schema-property-dose-value",
    title: "doseValue",
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

(SchemaPropertyDoseValue as typeof SchemaPropertyDoseValue & { toStructuredData: (props: SchemaPropertyDoseValueProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
