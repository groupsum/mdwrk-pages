import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColorSwatchProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyColorSwatch({ value, description = "A color swatch image, visualizing the color of a [[Product]]. Should match the textual description specified in the [[color]] property. This can be a URL or a fully described ImageObject.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyColorSwatchProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColorSwatchPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-color-swatch",
    shellClassName: "lander-semantic--schema-property-color-swatch",
    title: "colorSwatch",
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
