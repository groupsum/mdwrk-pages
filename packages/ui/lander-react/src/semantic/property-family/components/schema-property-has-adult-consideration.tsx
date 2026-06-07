import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasAdultConsiderationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasAdultConsiderationProps extends HasAdultConsiderationPropertyInput, GeneratedPropertyUiProps<HasAdultConsiderationPropertyInput> {}

export function SchemaPropertyHasAdultConsideration({ value: legacyValue, description = "Used to tag an item to be intended or suitable for consumption or use by adults only.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasAdultConsiderationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasAdultConsiderationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-adult-consideration",
    shellClassName: "lander-semantic--schema-property-has-adult-consideration",
    title: "hasAdultConsideration",
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

(SchemaPropertyHasAdultConsideration as typeof SchemaPropertyHasAdultConsideration & { toStructuredData: (props: SchemaPropertyHasAdultConsiderationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
