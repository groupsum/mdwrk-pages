import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StudyLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStudyLocationProps extends StudyLocationPropertyInput, GeneratedPropertyUiProps<StudyLocationPropertyInput> {}

export function SchemaPropertyStudyLocation({ value: legacyValue, description = "The location in which the study is taking/took place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStudyLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StudyLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-study-location",
    shellClassName: "lander-semantic--schema-property-study-location",
    title: "studyLocation",
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
