import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceLocation({ value, description = "The location (e.g. civic structure, local business, etc.) where a person can go to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-location",
    shellClassName: "lander-semantic--schema-property-service-location",
    title: "serviceLocation",
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
