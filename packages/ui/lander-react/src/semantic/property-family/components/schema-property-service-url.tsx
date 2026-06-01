import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceUrl({ value, description = "The website to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-url",
    shellClassName: "lander-semantic--schema-property-service-url",
    title: "serviceUrl",
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
