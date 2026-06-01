import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilityHazardProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessibilityHazard({ value, description = "A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessibilityHazardProps) {
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
