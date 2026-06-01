import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpatialProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySpatial({ value, description = "The \"spatial\" property can be used in cases when more specific properties\n(e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySpatialProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpatialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-spatial",
    shellClassName: "lander-semantic--schema-property-spatial",
    title: "spatial",
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
