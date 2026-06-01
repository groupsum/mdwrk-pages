import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicCompositionFormPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicCompositionFormProps extends MusicCompositionFormPropertyInput, GeneratedPropertyUiProps<MusicCompositionFormPropertyInput> {}

export function SchemaPropertyMusicCompositionForm({ value: legacyValue, description = "The type of composition (e.g. overture, sonata, symphony, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicCompositionFormProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicCompositionFormPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-music-composition-form",
    shellClassName: "lander-semantic--schema-property-music-composition-form",
    title: "musicCompositionForm",
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
