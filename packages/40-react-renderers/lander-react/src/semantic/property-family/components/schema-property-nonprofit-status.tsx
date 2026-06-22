import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NonprofitStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNonprofitStatusProps extends NonprofitStatusPropertyInput, GeneratedPropertyUiProps<NonprofitStatusPropertyInput> {}

export function SchemaPropertyNonprofitStatus({ value: legacyValue, description = "nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNonprofitStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NonprofitStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nonprofit-status",
    shellClassName: "lander-semantic--schema-property-nonprofit-status",
    title: "nonprofitStatus",
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

(SchemaPropertyNonprofitStatus as typeof SchemaPropertyNonprofitStatus & { toStructuredData: (props: SchemaPropertyNonprofitStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
