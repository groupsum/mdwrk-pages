import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStatTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStatType({ value, description = "Indicates the kind of statistic represented by a [[StatisticalVariable]], e.g. mean, count etc. The value of statType is a property, either from within Schema.org (e.g. [[median]], [[marginOfError]], [[maxValue]], [[minValue]]) or from other compatible (e.g. RDF) systems such as DataCommons.org or Wikidata.org. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStatTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StatTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-stat-type",
    shellClassName: "lander-semantic--schema-property-stat-type",
    title: "statType",
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
