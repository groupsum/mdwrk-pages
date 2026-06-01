import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InStoreReturnsOfferedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInStoreReturnsOfferedProps extends InStoreReturnsOfferedPropertyInput, GeneratedPropertyUiProps<InStoreReturnsOfferedPropertyInput> {}

export function SchemaPropertyInStoreReturnsOffered({ value: legacyValue, description = "Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInStoreReturnsOfferedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InStoreReturnsOfferedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-store-returns-offered",
    shellClassName: "lander-semantic--schema-property-in-store-returns-offered",
    title: "inStoreReturnsOffered",
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
