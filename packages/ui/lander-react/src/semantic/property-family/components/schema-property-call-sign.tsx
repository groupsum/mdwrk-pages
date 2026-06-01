import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCallSignProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCallSign({ value, description = "A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCallSignProps) {
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
