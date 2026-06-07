import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessibilityAPIPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityAPIProps extends AccessibilityAPIPropertyInput, GeneratedPropertyUiProps<AccessibilityAPIPropertyInput> {}

export function SchemaPropertyAccessibilityAPI({ value: legacyValue, description = "Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessibilityAPIProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAccessibilityAPI as typeof SchemaPropertyAccessibilityAPI & { toStructuredData: (props: SchemaPropertyAccessibilityAPIProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
