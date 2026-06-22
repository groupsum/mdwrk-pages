import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MedianPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedianProps extends MedianPropertyInput, GeneratedPropertyUiProps<MedianPropertyInput> {}

export function SchemaPropertyMedian({ value: legacyValue, description = "The median value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMedianProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MedianPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-median",
    shellClassName: "lander-semantic--schema-property-median",
    title: "median",
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

(SchemaPropertyMedian as typeof SchemaPropertyMedian & { toStructuredData: (props: SchemaPropertyMedianProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
