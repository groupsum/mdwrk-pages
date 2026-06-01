import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ScreenshotPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyScreenshotProps extends ScreenshotPropertyInput, GeneratedPropertyUiProps<ScreenshotPropertyInput> {}

export function SchemaPropertyScreenshot({ value: legacyValue, description = "A link to a screenshot image of the app.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyScreenshotProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ScreenshotPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-screenshot",
    shellClassName: "lander-semantic--schema-property-screenshot",
    title: "screenshot",
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
