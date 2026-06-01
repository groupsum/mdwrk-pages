import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicCompositionFormProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMusicCompositionForm({ value, description = "The type of composition (e.g. overture, sonata, symphony, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMusicCompositionFormProps) {
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
