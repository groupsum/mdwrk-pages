import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugLegalStatusInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface DrugLegalStatusProps extends DrugLegalStatusInput, GeneratedTypeUiProps<DrugLegalStatusInput> {}

export function DrugLegalStatus({ value: legacyValue, description = "The legal availability status of a medical drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DrugLegalStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DrugLegalStatusStructuredData,
    defaultEyebrow: "Type",
    kind: "drug-legal-status",
    shellClassName: "lander-semantic--drug-legal-status",
    title: "DrugLegalStatus",
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

(DrugLegalStatus as typeof DrugLegalStatus & { toStructuredData: (props: DrugLegalStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
