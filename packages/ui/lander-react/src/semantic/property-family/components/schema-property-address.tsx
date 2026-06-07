import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AddressPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressProps extends AddressPropertyInput, GeneratedPropertyUiProps<AddressPropertyInput> {}

export function SchemaPropertyAddress({ value: legacyValue, description = "Physical address of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address",
    shellClassName: "lander-semantic--schema-property-address",
    title: "address",
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

(SchemaPropertyAddress as typeof SchemaPropertyAddress & { toStructuredData: (props: SchemaPropertyAddressProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
