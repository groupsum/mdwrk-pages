import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhotoProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPhoto({ value, description = "A photograph of this place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPhotoProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhotoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-photo",
    shellClassName: "lander-semantic--schema-property-photo",
    title: "photo",
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
