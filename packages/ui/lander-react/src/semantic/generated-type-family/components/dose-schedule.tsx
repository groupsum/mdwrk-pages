import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoseScheduleInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface DoseScheduleProps extends DoseScheduleInput, GeneratedTypeUiProps<DoseScheduleInput> {}

export function DoseSchedule({ value: legacyValue, description = "A specific dosing schedule for a drug or supplement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: DoseScheduleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.DoseScheduleStructuredData,
    defaultEyebrow: "Type",
    kind: "dose-schedule",
    shellClassName: "lander-semantic--dose-schedule",
    title: "DoseSchedule",
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
