import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceAreaProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceArea({ value, description = "The geographic area where the service is provided.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceAreaProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceAreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-area",
    shellClassName: "lander-semantic--schema-property-service-area",
    title: "serviceArea",
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
