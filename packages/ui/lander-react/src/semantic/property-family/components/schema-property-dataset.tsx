import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DatasetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatasetProps extends DatasetPropertyInput, GeneratedPropertyUiProps<DatasetPropertyInput> {}

export function SchemaPropertyDataset({ value: legacyValue, description = "A dataset contained in this catalog.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDatasetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDataset as typeof SchemaPropertyDataset & { toStructuredData: (props: SchemaPropertyDatasetProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
