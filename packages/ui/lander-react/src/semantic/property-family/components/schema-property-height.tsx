import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHeightProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHeight({ value, description = "The height of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHeightProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HeightPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-height",
    shellClassName: "lander-semantic--schema-property-height",
    title: "height",
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
