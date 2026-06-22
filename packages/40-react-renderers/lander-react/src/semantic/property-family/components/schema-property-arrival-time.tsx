import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ArrivalTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArrivalTimeProps extends ArrivalTimePropertyInput, GeneratedPropertyUiProps<ArrivalTimePropertyInput> {}

export function SchemaPropertyArrivalTime({ value: legacyValue, description = "The expected arrival time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyArrivalTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ArrivalTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-arrival-time",
    shellClassName: "lander-semantic--schema-property-arrival-time",
    title: "arrivalTime",
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

(SchemaPropertyArrivalTime as typeof SchemaPropertyArrivalTime & { toStructuredData: (props: SchemaPropertyArrivalTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
