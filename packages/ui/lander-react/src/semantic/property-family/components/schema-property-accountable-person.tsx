import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccountablePersonPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccountablePersonProps extends AccountablePersonPropertyInput, GeneratedPropertyUiProps<AccountablePersonPropertyInput> {}

export function SchemaPropertyAccountablePerson({ value: legacyValue, description = "Specifies the Person that is legally accountable for the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccountablePersonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccountablePersonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accountable-person",
    shellClassName: "lander-semantic--schema-property-accountable-person",
    title: "accountablePerson",
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
