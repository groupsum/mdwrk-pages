import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VersionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVersionProps extends VersionPropertyInput, GeneratedPropertyUiProps<VersionPropertyInput> {}

export function SchemaPropertyVersion({ value: legacyValue, description = "The version of the CreativeWork embodied by a specified resource.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVersionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VersionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-version",
    shellClassName: "lander-semantic--schema-property-version",
    title: "version",
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

(SchemaPropertyVersion as typeof SchemaPropertyVersion & { toStructuredData: (props: SchemaPropertyVersionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
