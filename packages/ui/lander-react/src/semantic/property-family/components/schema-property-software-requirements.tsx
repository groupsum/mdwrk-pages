import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SoftwareRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySoftwareRequirementsProps extends SoftwareRequirementsPropertyInput, GeneratedPropertyUiProps<SoftwareRequirementsPropertyInput> {}

export function SchemaPropertySoftwareRequirements({ value: legacyValue, description = "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySoftwareRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
