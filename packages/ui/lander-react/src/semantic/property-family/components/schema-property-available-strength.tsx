import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableStrengthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableStrengthProps extends AvailableStrengthPropertyInput, GeneratedPropertyUiProps<AvailableStrengthPropertyInput> {}

export function SchemaPropertyAvailableStrength({ value: legacyValue, description = "An available dosage strength for the drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableStrengthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableStrengthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-strength",
    shellClassName: "lander-semantic--schema-property-available-strength",
    title: "availableStrength",
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

(SchemaPropertyAvailableStrength as typeof SchemaPropertyAvailableStrength & { toStructuredData: (props: SchemaPropertyAvailableStrengthProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
