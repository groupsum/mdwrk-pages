import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DatasetTimeIntervalPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatasetTimeIntervalProps extends DatasetTimeIntervalPropertyInput, GeneratedPropertyUiProps<DatasetTimeIntervalPropertyInput> {}

export function SchemaPropertyDatasetTimeInterval({ value: legacyValue, description = "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDatasetTimeIntervalProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatasetTimeIntervalPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dataset-time-interval",
    shellClassName: "lander-semantic--schema-property-dataset-time-interval",
    title: "datasetTimeInterval",
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

(SchemaPropertyDatasetTimeInterval as typeof SchemaPropertyDatasetTimeInterval & { toStructuredData: (props: SchemaPropertyDatasetTimeIntervalProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
