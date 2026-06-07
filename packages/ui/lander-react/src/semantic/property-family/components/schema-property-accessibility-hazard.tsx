import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessibilityHazardPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityHazardProps extends AccessibilityHazardPropertyInput, GeneratedPropertyUiProps<AccessibilityHazardPropertyInput> {}

export function SchemaPropertyAccessibilityHazard({ value: legacyValue, description = "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessibilityHazardProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessibilityHazardPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accessibility-hazard",
    shellClassName: "lander-semantic--schema-property-accessibility-hazard",
    title: "accessibilityHazard",
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

(SchemaPropertyAccessibilityHazard as typeof SchemaPropertyAccessibilityHazard & { toStructuredData: (props: SchemaPropertyAccessibilityHazardProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
