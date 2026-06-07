import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PartOfSystemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSystemProps extends PartOfSystemPropertyInput, GeneratedPropertyUiProps<PartOfSystemPropertyInput> {}

export function SchemaPropertyPartOfSystem({ value: legacyValue, description = "The anatomical or organ system that this structure is part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPartOfSystemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-system",
    shellClassName: "lander-semantic--schema-property-part-of-system",
    title: "partOfSystem",
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

(SchemaPropertyPartOfSystem as typeof SchemaPropertyPartOfSystem & { toStructuredData: (props: SchemaPropertyPartOfSystemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
