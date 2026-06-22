import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Percentile25PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile25Props extends Percentile25PropertyInput, GeneratedPropertyUiProps<Percentile25PropertyInput> {}

export function SchemaPropertyPercentile25({ value: legacyValue, description = "The 25th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPercentile25Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile25PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile25",
    shellClassName: "lander-semantic--schema-property-percentile25",
    title: "percentile25",
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

(SchemaPropertyPercentile25 as typeof SchemaPropertyPercentile25 & { toStructuredData: (props: SchemaPropertyPercentile25Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
