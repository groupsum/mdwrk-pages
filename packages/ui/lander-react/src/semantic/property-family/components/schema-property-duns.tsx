import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DunsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDunsProps extends DunsPropertyInput, GeneratedPropertyUiProps<DunsPropertyInput> {}

export function SchemaPropertyDuns({ value: legacyValue, description = "The Dun & Bradstreet DUNS number for identifying an organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDunsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DunsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duns",
    shellClassName: "lander-semantic--schema-property-duns",
    title: "duns",
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
