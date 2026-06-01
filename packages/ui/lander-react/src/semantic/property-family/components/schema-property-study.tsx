import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StudyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudyProps extends StudyPropertyInput, GeneratedPropertyUiProps<StudyPropertyInput> {}

export function SchemaPropertyStudy({ value: legacyValue, description = "A medical study or trial related to this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStudyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StudyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-study",
    shellClassName: "lander-semantic--schema-property-study",
    title: "study",
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
