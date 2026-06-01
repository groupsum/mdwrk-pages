import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeathPlaceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDeathPlace({ value, description = "The place where the person died.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDeathPlaceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeathPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-death-place",
    shellClassName: "lander-semantic--schema-property-death-place",
    title: "deathPlace",
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
