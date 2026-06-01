import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PerformerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformerProps extends PerformerPropertyInput, GeneratedPropertyUiProps<PerformerPropertyInput> {}

export function SchemaPropertyPerformer({ value: legacyValue, description = "A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPerformerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performer",
    shellClassName: "lander-semantic--schema-property-performer",
    title: "performer",
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
