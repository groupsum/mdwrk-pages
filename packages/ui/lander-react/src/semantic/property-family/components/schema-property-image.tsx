import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyImageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyImage({ value, description = "An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyImageProps) {
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
