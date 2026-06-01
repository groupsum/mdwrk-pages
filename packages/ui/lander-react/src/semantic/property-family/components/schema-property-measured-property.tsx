import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasuredPropertyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMeasuredProperty({ value, description = "The measuredProperty of an [[Observation]], typically via its [[StatisticalVariable]]. There are various kinds of applicable [[Property]]: a schema.org property, a property from other RDF-compatible systems, e.g. W3C RDF Data Cube, Data Commons, Wikidata, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMeasuredPropertyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MeasuredPropertyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-measured-property",
    shellClassName: "lander-semantic--schema-property-measured-property",
    title: "measuredProperty",
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
