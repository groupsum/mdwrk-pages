import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SupportingDataPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupportingDataProps extends SupportingDataPropertyInput, GeneratedPropertyUiProps<SupportingDataPropertyInput> {}

export function SchemaPropertySupportingData({ value: legacyValue, description = "Supporting data for a SoftwareApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySupportingDataProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySupportingData as typeof SchemaPropertySupportingData & { toStructuredData: (props: SchemaPropertySupportingDataProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
