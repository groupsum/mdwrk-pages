import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TimeRequiredPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTimeRequiredProps extends TimeRequiredPropertyInput, GeneratedPropertyUiProps<TimeRequiredPropertyInput> {}

export function SchemaPropertyTimeRequired({ value: legacyValue, description = "Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTimeRequiredProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TimeRequiredPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-time-required",
    shellClassName: "lander-semantic--schema-property-time-required",
    title: "timeRequired",
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

(SchemaPropertyTimeRequired as typeof SchemaPropertyTimeRequired & { toStructuredData: (props: SchemaPropertyTimeRequiredProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
