import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityControlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessibilityControl({ value, description = "Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessibilityControlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessibilityControlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accessibility-control",
    shellClassName: "lander-semantic--schema-property-accessibility-control",
    title: "accessibilityControl",
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
