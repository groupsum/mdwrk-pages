import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugStrengthInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface DrugStrengthProps extends DrugStrengthInput, GeneratedTypeUiProps<DrugStrengthInput> {}

export function DrugStrength({ value: legacyValue, description = "A specific strength in which a medical drug is available in a specific country.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DrugStrengthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DrugStrengthStructuredData,
    defaultEyebrow: "Type",
    kind: "drug-strength",
    shellClassName: "lander-semantic--drug-strength",
    title: "DrugStrength",
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

(DrugStrength as typeof DrugStrength & { toStructuredData: (props: DrugStrengthProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
