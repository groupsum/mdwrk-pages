import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySoftwareRequirements({ value, description = "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySoftwareRequirementsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SoftwareRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-software-requirements",
    shellClassName: "lander-semantic--schema-property-software-requirements",
    title: "softwareRequirements",
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
