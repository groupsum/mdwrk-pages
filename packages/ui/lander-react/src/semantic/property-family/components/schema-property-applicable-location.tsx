import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicableLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyApplicableLocation({ value, description = "The location in which the status applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyApplicableLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicableLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-applicable-location",
    shellClassName: "lander-semantic--schema-property-applicable-location",
    title: "applicableLocation",
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
