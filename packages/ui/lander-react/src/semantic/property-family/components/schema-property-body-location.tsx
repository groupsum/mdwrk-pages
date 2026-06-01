import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBodyLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBodyLocation({ value, description = "Location in the body of the anatomical structure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBodyLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BodyLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-body-location",
    shellClassName: "lander-semantic--schema-property-body-location",
    title: "bodyLocation",
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
