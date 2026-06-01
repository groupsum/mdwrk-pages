import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicalKeyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicalKey({ value, description = "The key, mode, or scale this composition uses.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicalKeyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicalKeyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-musical-key",
    shellClassName: "lander-semantic--schema-property-musical-key",
    title: "musicalKey",
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
