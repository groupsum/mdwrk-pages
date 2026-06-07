import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequirementsProps extends RequirementsPropertyInput, GeneratedPropertyUiProps<RequirementsPropertyInput> {}

export function SchemaPropertyRequirements({ value: legacyValue, description = "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (examples: DirectX, Java or .NET runtime).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRequirements as typeof SchemaPropertyRequirements & { toStructuredData: (props: SchemaPropertyRequirementsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
