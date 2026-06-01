import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReleaseOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseOfProps extends ReleaseOfPropertyInput, GeneratedPropertyUiProps<ReleaseOfPropertyInput> {}

export function SchemaPropertyReleaseOf({ value: legacyValue, description = "The album this is a release of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReleaseOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleaseOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-release-of",
    shellClassName: "lander-semantic--schema-property-release-of",
    title: "releaseOf",
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
