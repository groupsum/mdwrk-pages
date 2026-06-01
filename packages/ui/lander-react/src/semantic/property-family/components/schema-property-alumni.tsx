import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlumniPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlumniProps extends AlumniPropertyInput, GeneratedPropertyUiProps<AlumniPropertyInput> {}

export function SchemaPropertyAlumni({ value: legacyValue, description = "Alumni of an organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlumniProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlumniPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alumni",
    shellClassName: "lander-semantic--schema-property-alumni",
    title: "alumni",
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
