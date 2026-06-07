import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ColorSwatchPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColorSwatchProps extends ColorSwatchPropertyInput, GeneratedPropertyUiProps<ColorSwatchPropertyInput> {}

export function SchemaPropertyColorSwatch({ value: legacyValue, description = "A color swatch image, visualizing the color of a [[Product]]. Should match the textual description specified in the [[color]] property. This can be a URL or a fully described ImageObject.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyColorSwatchProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyColorSwatch as typeof SchemaPropertyColorSwatch & { toStructuredData: (props: SchemaPropertyColorSwatchProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
