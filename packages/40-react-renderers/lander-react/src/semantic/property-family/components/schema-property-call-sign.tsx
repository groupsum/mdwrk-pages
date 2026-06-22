import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CallSignPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCallSignProps extends CallSignPropertyInput, GeneratedPropertyUiProps<CallSignPropertyInput> {}

export function SchemaPropertyCallSign({ value: legacyValue, description = "A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCallSignProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CallSignPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-call-sign",
    shellClassName: "lander-semantic--schema-property-call-sign",
    title: "callSign",
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

(SchemaPropertyCallSign as typeof SchemaPropertyCallSign & { toStructuredData: (props: SchemaPropertyCallSignProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
