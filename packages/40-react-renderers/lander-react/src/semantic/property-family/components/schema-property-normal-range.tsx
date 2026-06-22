import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NormalRangePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNormalRangeProps extends NormalRangePropertyInput, GeneratedPropertyUiProps<NormalRangePropertyInput> {}

export function SchemaPropertyNormalRange({ value: legacyValue, description = "Range of acceptable values for a typical patient, when applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNormalRangeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NormalRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-normal-range",
    shellClassName: "lander-semantic--schema-property-normal-range",
    title: "normalRange",
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

(SchemaPropertyNormalRange as typeof SchemaPropertyNormalRange & { toStructuredData: (props: SchemaPropertyNormalRangeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
