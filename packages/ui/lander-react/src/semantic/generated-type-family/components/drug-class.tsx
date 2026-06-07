import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugClassInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface DrugClassProps extends DrugClassInput, GeneratedTypeUiProps<DrugClassInput> {}

export function DrugClass({ value: legacyValue, description = "A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DrugClassProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DrugClassStructuredData,
    defaultEyebrow: "Type",
    kind: "drug-class",
    shellClassName: "lander-semantic--drug-class",
    title: "DrugClass",
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

(DrugClass as typeof DrugClass & { toStructuredData: (props: DrugClassProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
