import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCharacterProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCharacter({ value, description = "Fictional person connected with a creative work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCharacterProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CharacterPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-character",
    shellClassName: "lander-semantic--schema-property-character",
    title: "character",
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
