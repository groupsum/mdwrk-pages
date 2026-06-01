import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpatialCoverageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySpatialCoverage({ value, description = "The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySpatialCoverageProps) {
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
