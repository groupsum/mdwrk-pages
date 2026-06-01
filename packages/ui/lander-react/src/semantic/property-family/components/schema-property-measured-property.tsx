import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MeasuredPropertyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMeasuredPropertyProps extends MeasuredPropertyPropertyInput, GeneratedPropertyUiProps<MeasuredPropertyPropertyInput> {}

export function SchemaPropertyMeasuredProperty({ value: legacyValue, description = "The measuredProperty of an [[Observation]], typically via its [[StatisticalVariable]]. There are various kinds of applicable [[Property]]: a schema.org property, a property from other RDF-compatible systems, e.g. W3C RDF Data Cube, Data Commons, Wikidata, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMeasuredPropertyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
