import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemProps extends ItemPropertyInput, GeneratedPropertyUiProps<ItemPropertyInput> {}

export function SchemaPropertyItem({ value: legacyValue, description = "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item",
    shellClassName: "lander-semantic--schema-property-item",
    title: "item",
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

(SchemaPropertyItem as typeof SchemaPropertyItem & { toStructuredData: (props: SchemaPropertyItemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
