import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareVersionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySoftwareVersion({ value, description = "Version of the software instance.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySoftwareVersionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareVersionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-version",
    shellClassName: "lander-semantic--schema-property-software-version",
    title: "softwareVersion",
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
