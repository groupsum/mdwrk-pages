import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StatTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStatTypeProps extends StatTypePropertyInput, GeneratedPropertyUiProps<StatTypePropertyInput> {}

export function SchemaPropertyStatType({ value: legacyValue, description = "Indicates the kind of statistic represented by a [[StatisticalVariable]], e.g. mean, count etc. The value of statType is a property, either from within Schema.org (e.g. [[median]], [[marginOfError]], [[maxValue]], [[minValue]]) or from other compatible (e.g. RDF) systems such as DataCommons.org or Wikidata.org. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStatTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyStatType as typeof SchemaPropertyStatType & { toStructuredData: (props: SchemaPropertyStatTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
