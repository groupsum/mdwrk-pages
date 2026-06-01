import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CausePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCauseProps extends CausePropertyInput, GeneratedPropertyUiProps<CausePropertyInput> {}

export function SchemaPropertyCause({ value: legacyValue, description = "The cause of a medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCauseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CausePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cause",
    shellClassName: "lander-semantic--schema-property-cause",
    title: "cause",
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
