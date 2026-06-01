import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHomeLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHomeLocation({ value, description = "A contact location for a person's residence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHomeLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HomeLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-home-location",
    shellClassName: "lander-semantic--schema-property-home-location",
    title: "homeLocation",
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
