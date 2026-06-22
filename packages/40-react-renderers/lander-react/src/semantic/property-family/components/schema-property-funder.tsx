import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FunderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFunderProps extends FunderPropertyInput, GeneratedPropertyUiProps<FunderPropertyInput> {}

export function SchemaPropertyFunder({ value: legacyValue, description = "A person or organization that supports (sponsors) something through some kind of financial contribution.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFunderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FunderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-funder",
    shellClassName: "lander-semantic--schema-property-funder",
    title: "funder",
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

(SchemaPropertyFunder as typeof SchemaPropertyFunder & { toStructuredData: (props: SchemaPropertyFunderProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
