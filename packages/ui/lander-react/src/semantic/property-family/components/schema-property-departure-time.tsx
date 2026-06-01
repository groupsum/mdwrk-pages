import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepartureTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDepartureTime({ value, description = "The expected departure time.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDepartureTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DepartureTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-departure-time",
    shellClassName: "lander-semantic--schema-property-departure-time",
    title: "departureTime",
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
