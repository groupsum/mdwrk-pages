import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ResponsibilitiesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyResponsibilitiesProps extends ResponsibilitiesPropertyInput, GeneratedPropertyUiProps<ResponsibilitiesPropertyInput> {}

export function SchemaPropertyResponsibilities({ value: legacyValue, description = "Responsibilities associated with this role or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyResponsibilitiesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ResponsibilitiesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-responsibilities",
    shellClassName: "lander-semantic--schema-property-responsibilities",
    title: "responsibilities",
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

(SchemaPropertyResponsibilities as typeof SchemaPropertyResponsibilities & { toStructuredData: (props: SchemaPropertyResponsibilitiesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
