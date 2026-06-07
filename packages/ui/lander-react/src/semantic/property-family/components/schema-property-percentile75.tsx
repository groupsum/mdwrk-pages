import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Percentile75PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPercentile75Props extends Percentile75PropertyInput, GeneratedPropertyUiProps<Percentile75PropertyInput> {}

export function SchemaPropertyPercentile75({ value: legacyValue, description = "The 75th percentile value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPercentile75Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Percentile75PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-percentile75",
    shellClassName: "lander-semantic--schema-property-percentile75",
    title: "percentile75",
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

(SchemaPropertyPercentile75 as typeof SchemaPropertyPercentile75 & { toStructuredData: (props: SchemaPropertyPercentile75Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
