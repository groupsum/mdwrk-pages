import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessibilityControlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityControlProps extends AccessibilityControlPropertyInput, GeneratedPropertyUiProps<AccessibilityControlPropertyInput> {}

export function SchemaPropertyAccessibilityControl({ value: legacyValue, description = "Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessibilityControlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
