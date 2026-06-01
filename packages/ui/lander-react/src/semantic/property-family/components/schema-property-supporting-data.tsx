import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupportingDataProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySupportingData({ value, description = "Supporting data for a SoftwareApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySupportingDataProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SupportingDataPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-supporting-data",
    shellClassName: "lander-semantic--schema-property-supporting-data",
    title: "supportingData",
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
