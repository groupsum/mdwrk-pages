import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFaxNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFaxNumber({ value, description = "The fax number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFaxNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FaxNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fax-number",
    shellClassName: "lander-semantic--schema-property-fax-number",
    title: "faxNumber",
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
