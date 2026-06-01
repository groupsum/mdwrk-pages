import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InstrumentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInstrumentProps extends InstrumentPropertyInput, GeneratedPropertyUiProps<InstrumentPropertyInput> {}

export function SchemaPropertyInstrument({ value: legacyValue, description = "The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInstrumentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InstrumentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-instrument",
    shellClassName: "lander-semantic--schema-property-instrument",
    title: "instrument",
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
