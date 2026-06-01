import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FaxNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFaxNumberProps extends FaxNumberPropertyInput, GeneratedPropertyUiProps<FaxNumberPropertyInput> {}

export function SchemaPropertyFaxNumber({ value: legacyValue, description = "The fax number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFaxNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
