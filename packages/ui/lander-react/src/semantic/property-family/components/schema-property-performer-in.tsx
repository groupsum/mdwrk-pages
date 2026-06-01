import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PerformerInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformerInProps extends PerformerInPropertyInput, GeneratedPropertyUiProps<PerformerInPropertyInput> {}

export function SchemaPropertyPerformerIn({ value: legacyValue, description = "Event that this person is a performer or participant in.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPerformerInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformerInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performer-in",
    shellClassName: "lander-semantic--schema-property-performer-in",
    title: "performerIn",
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
