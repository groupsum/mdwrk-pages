import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatePostedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDatePosted({ value, description = "Publication date of an online listing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDatePostedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatePostedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-posted",
    shellClassName: "lander-semantic--schema-property-date-posted",
    title: "datePosted",
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
