import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArrivalTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyArrivalTime({ value, description = "The expected arrival time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyArrivalTimeProps) {
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
