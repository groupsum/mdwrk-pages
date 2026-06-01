import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSeriesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPartOfSeries({ value, description = "The series to which this episode or season belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPartOfSeriesProps) {
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
