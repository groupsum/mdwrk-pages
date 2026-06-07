import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CharacterPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCharacterProps extends CharacterPropertyInput, GeneratedPropertyUiProps<CharacterPropertyInput> {}

export function SchemaPropertyCharacter({ value: legacyValue, description = "Fictional person connected with a creative work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCharacterProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCharacter as typeof SchemaPropertyCharacter & { toStructuredData: (props: SchemaPropertyCharacterProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
