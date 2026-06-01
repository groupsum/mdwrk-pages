import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatasetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDataset({ value, description = "A dataset contained in this catalog.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDatasetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatasetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dataset",
    shellClassName: "lander-semantic--schema-property-dataset",
    title: "dataset",
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
