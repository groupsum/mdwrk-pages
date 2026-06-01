import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorkLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkLocationProps extends WorkLocationPropertyInput, GeneratedPropertyUiProps<WorkLocationPropertyInput> {}

export function SchemaPropertyWorkLocation({ value: legacyValue, description = "A contact location for a person's place of work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorkLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-location",
    shellClassName: "lander-semantic--schema-property-work-location",
    title: "workLocation",
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
