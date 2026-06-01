import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FamilyNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFamilyNameProps extends FamilyNamePropertyInput, GeneratedPropertyUiProps<FamilyNamePropertyInput> {}

export function SchemaPropertyFamilyName({ value: legacyValue, description = "Family name. In the U.S., the last name of a Person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFamilyNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FamilyNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-family-name",
    shellClassName: "lander-semantic--schema-property-family-name",
    title: "familyName",
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
