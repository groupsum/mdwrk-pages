import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorkLocation({ value, description = "A contact location for a person's place of work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorkLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-location",
    shellClassName: "lander-semantic--schema-property-work-location",
    title: "workLocation",
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
