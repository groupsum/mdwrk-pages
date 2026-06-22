import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ImagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyImageProps extends ImagePropertyInput, GeneratedPropertyUiProps<ImagePropertyInput> {}

export function SchemaPropertyImage({ value: legacyValue, description = "An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyImageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ImagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-image",
    shellClassName: "lander-semantic--schema-property-image",
    title: "image",
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

(SchemaPropertyImage as typeof SchemaPropertyImage & { toStructuredData: (props: SchemaPropertyImageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
