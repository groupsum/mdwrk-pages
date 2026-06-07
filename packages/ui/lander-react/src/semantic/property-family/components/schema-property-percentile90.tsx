import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Percentile90PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile90Props extends Percentile90PropertyInput, GeneratedPropertyUiProps<Percentile90PropertyInput> {}

export function SchemaPropertyPercentile90({ value: legacyValue, description = "The 90th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPercentile90Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile90PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile90",
    shellClassName: "lander-semantic--schema-property-percentile90",
    title: "percentile90",
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

(SchemaPropertyPercentile90 as typeof SchemaPropertyPercentile90 & { toStructuredData: (props: SchemaPropertyPercentile90Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
