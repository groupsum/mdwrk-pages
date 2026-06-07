import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Percentile10PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile10Props extends Percentile10PropertyInput, GeneratedPropertyUiProps<Percentile10PropertyInput> {}

export function SchemaPropertyPercentile10({ value: legacyValue, description = "The 10th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPercentile10Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile10PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile10",
    shellClassName: "lander-semantic--schema-property-percentile10",
    title: "percentile10",
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

(SchemaPropertyPercentile10 as typeof SchemaPropertyPercentile10 & { toStructuredData: (props: SchemaPropertyPercentile10Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
