import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HowPerformedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHowPerformedProps extends HowPerformedPropertyInput, GeneratedPropertyUiProps<HowPerformedPropertyInput> {}

export function SchemaPropertyHowPerformed({ value: legacyValue, description = "How the procedure is performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHowPerformedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HowPerformedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-how-performed",
    shellClassName: "lander-semantic--schema-property-how-performed",
    title: "howPerformed",
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
