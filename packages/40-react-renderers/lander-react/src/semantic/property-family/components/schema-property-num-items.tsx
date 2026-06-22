import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumItemsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumItemsProps extends NumItemsPropertyInput, GeneratedPropertyUiProps<NumItemsPropertyInput> {}

export function SchemaPropertyNumItems({ value: legacyValue, description = "Limits the number of items being shipped for which these conditions apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumItemsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumItemsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-num-items",
    shellClassName: "lander-semantic--schema-property-num-items",
    title: "numItems",
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

(SchemaPropertyNumItems as typeof SchemaPropertyNumItems & { toStructuredData: (props: SchemaPropertyNumItemsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
