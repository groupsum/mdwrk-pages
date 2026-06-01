import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareHelpProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySoftwareHelp({ value, description = "Software application help.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySoftwareHelpProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareHelpPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-help",
    shellClassName: "lander-semantic--schema-property-software-help",
    title: "softwareHelp",
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
