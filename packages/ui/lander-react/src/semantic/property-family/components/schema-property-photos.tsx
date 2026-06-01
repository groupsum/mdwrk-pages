import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhotosProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPhotos({ value, description = "Photographs of this place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPhotosProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhotosPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-photos",
    shellClassName: "lander-semantic--schema-property-photos",
    title: "photos",
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
