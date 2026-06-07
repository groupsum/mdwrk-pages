import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NonProprietaryNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNonProprietaryNameProps extends NonProprietaryNamePropertyInput, GeneratedPropertyUiProps<NonProprietaryNamePropertyInput> {}

export function SchemaPropertyNonProprietaryName({ value: legacyValue, description = "The generic name of this drug or supplement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNonProprietaryNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NonProprietaryNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-non-proprietary-name",
    shellClassName: "lander-semantic--schema-property-non-proprietary-name",
    title: "nonProprietaryName",
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

(SchemaPropertyNonProprietaryName as typeof SchemaPropertyNonProprietaryName & { toStructuredData: (props: SchemaPropertyNonProprietaryNameProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
