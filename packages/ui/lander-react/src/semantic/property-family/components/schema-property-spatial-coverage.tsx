import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SpatialCoveragePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpatialCoverageProps extends SpatialCoveragePropertyInput, GeneratedPropertyUiProps<SpatialCoveragePropertyInput> {}

export function SchemaPropertySpatialCoverage({ value: legacyValue, description = "The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySpatialCoverageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpatialCoveragePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-spatial-coverage",
    shellClassName: "lander-semantic--schema-property-spatial-coverage",
    title: "spatialCoverage",
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

(SchemaPropertySpatialCoverage as typeof SchemaPropertySpatialCoverage & { toStructuredData: (props: SchemaPropertySpatialCoverageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
