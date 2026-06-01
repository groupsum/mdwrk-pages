import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityFeatureProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessibilityFeature({ value, description = "Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessibilityFeatureProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessibilityFeaturePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accessibility-feature",
    shellClassName: "lander-semantic--schema-property-accessibility-feature",
    title: "accessibilityFeature",
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
