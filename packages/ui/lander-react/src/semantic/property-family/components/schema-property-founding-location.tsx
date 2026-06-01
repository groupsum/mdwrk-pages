import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundingLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFoundingLocation({ value, description = "The place where the Organization was founded.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFoundingLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundingLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founding-location",
    shellClassName: "lander-semantic--schema-property-founding-location",
    title: "foundingLocation",
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
