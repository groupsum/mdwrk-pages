import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TeachesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTeachesProps extends TeachesPropertyInput, GeneratedPropertyUiProps<TeachesPropertyInput> {}

export function SchemaPropertyTeaches({ value: legacyValue, description = "The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTeachesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TeachesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-teaches",
    shellClassName: "lander-semantic--schema-property-teaches",
    title: "teaches",
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

(SchemaPropertyTeaches as typeof SchemaPropertyTeaches & { toStructuredData: (props: SchemaPropertyTeachesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
