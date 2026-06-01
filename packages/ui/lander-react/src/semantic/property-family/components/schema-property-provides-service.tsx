import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProvidesServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProvidesService({ value, description = "The service provided by this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProvidesServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProvidesServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provides-service",
    shellClassName: "lander-semantic--schema-property-provides-service",
    title: "providesService",
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
