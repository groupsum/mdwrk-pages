import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CreditedToPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreditedToProps extends CreditedToPropertyInput, GeneratedPropertyUiProps<CreditedToPropertyInput> {}

export function SchemaPropertyCreditedTo({ value: legacyValue, description = "The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to \"Stefani Germanotta Band\", but by Lady Gaga.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCreditedToProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreditedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-credited-to",
    shellClassName: "lander-semantic--schema-property-credited-to",
    title: "creditedTo",
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
