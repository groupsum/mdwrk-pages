import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PartOfSeriesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSeriesProps extends PartOfSeriesPropertyInput, GeneratedPropertyUiProps<PartOfSeriesPropertyInput> {}

export function SchemaPropertyPartOfSeries({ value: legacyValue, description = "The series to which this episode or season belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPartOfSeriesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfSeriesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-series",
    shellClassName: "lander-semantic--schema-property-part-of-series",
    title: "partOfSeries",
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

(SchemaPropertyPartOfSeries as typeof SchemaPropertyPartOfSeries & { toStructuredData: (props: SchemaPropertyPartOfSeriesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
