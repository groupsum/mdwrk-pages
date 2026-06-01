import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlumniOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlumniOfProps extends AlumniOfPropertyInput, GeneratedPropertyUiProps<AlumniOfPropertyInput> {}

export function SchemaPropertyAlumniOf({ value: legacyValue, description = "An organization that the person is an alumni of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlumniOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlumniOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alumni-of",
    shellClassName: "lander-semantic--schema-property-alumni-of",
    title: "alumniOf",
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
