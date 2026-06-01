import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityAPIProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessibilityAPI({ value, description = "Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessibilityAPIProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessibilityAPIPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accessibility-api",
    shellClassName: "lander-semantic--schema-property-accessibility-api",
    title: "accessibilityAPI",
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
