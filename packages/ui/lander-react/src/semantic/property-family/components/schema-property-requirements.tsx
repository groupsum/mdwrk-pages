import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequirements({ value, description = "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequirementsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-requirements",
    shellClassName: "lander-semantic--schema-property-requirements",
    title: "requirements",
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
