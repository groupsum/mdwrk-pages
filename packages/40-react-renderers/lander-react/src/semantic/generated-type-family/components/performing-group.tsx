import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PerformingGroupInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, buildGeneratedTypeStructuredData, renderGeneratedTypeCard } from "../shared.js";

export interface PerformingGroupProps extends PerformingGroupInput, GeneratedTypeUiProps<PerformingGroupInput> {}

export function PerformingGroup({ value: legacyValue, description = "A performance group, such as a band, an orchestra, or a circus.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PerformingGroupProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PerformingGroupStructuredData,
    defaultEyebrow: "Type",
    kind: "performing-group",
    shellClassName: "lander-semantic--performing-group",
    title: "PerformingGroup",
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

(PerformingGroup as typeof PerformingGroup & { toStructuredData: (props: PerformingGroupProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedTypeStructuredData(props);
