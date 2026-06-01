import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatasetTimeIntervalProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDatasetTimeInterval({ value, description = "The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDatasetTimeIntervalProps) {
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
