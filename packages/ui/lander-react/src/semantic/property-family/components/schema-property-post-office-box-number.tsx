import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostOfficeBoxNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostOfficeBoxNumber({ value, description = "The post office box number for PO box addresses.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostOfficeBoxNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostOfficeBoxNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-post-office-box-number",
    shellClassName: "lander-semantic--schema-property-post-office-box-number",
    title: "postOfficeBoxNumber",
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
