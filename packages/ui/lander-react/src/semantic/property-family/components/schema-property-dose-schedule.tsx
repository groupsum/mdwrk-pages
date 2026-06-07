import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoseSchedulePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseScheduleProps extends DoseSchedulePropertyInput, GeneratedPropertyUiProps<DoseSchedulePropertyInput> {}

export function SchemaPropertyDoseSchedule({ value: legacyValue, description = "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDoseScheduleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseSchedulePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-schedule",
    shellClassName: "lander-semantic--schema-property-dose-schedule",
    title: "doseSchedule",
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

(SchemaPropertyDoseSchedule as typeof SchemaPropertyDoseSchedule & { toStructuredData: (props: SchemaPropertyDoseScheduleProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
