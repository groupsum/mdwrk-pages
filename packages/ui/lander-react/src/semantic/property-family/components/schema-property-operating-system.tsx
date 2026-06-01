import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OperatingSystemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOperatingSystemProps extends OperatingSystemPropertyInput, GeneratedPropertyUiProps<OperatingSystemPropertyInput> {}

export function SchemaPropertyOperatingSystem({ value: legacyValue, description = "Operating systems supported (Windows 7, OS X 10.6, Android 1.6).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOperatingSystemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OperatingSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-operating-system",
    shellClassName: "lander-semantic--schema-property-operating-system",
    title: "operatingSystem",
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
