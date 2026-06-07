import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DietInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface DietProps extends DietInput, GeneratedTypeUiProps<DietInput> {}

export function Diet({ value: legacyValue, description = "A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DietProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DietStructuredData,
    defaultEyebrow: "Type",
    kind: "diet",
    shellClassName: "lander-semantic--diet",
    title: "Diet",
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

(Diet as typeof Diet & { toStructuredData: (props: DietProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
