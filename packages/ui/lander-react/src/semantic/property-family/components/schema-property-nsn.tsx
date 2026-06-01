import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NsnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNsnProps extends NsnPropertyInput, GeneratedPropertyUiProps<NsnPropertyInput> {}

export function SchemaPropertyNsn({ value: legacyValue, description = "Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNsnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NsnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nsn",
    shellClassName: "lander-semantic--schema-property-nsn",
    title: "nsn",
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
