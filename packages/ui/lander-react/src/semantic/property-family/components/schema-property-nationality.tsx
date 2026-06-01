import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NationalityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNationalityProps extends NationalityPropertyInput, GeneratedPropertyUiProps<NationalityPropertyInput> {}

export function SchemaPropertyNationality({ value: legacyValue, description = "Nationality of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNationalityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NationalityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nationality",
    shellClassName: "lander-semantic--schema-property-nationality",
    title: "nationality",
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
