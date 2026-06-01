import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaximumIntakePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumIntakeProps extends MaximumIntakePropertyInput, GeneratedPropertyUiProps<MaximumIntakePropertyInput> {}

export function SchemaPropertyMaximumIntake({ value: legacyValue, description = "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaximumIntakeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaximumIntakePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maximum-intake",
    shellClassName: "lander-semantic--schema-property-maximum-intake",
    title: "maximumIntake",
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
