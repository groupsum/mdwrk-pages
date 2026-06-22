import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AddressLocalityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddressLocalityProps extends AddressLocalityPropertyInput, GeneratedPropertyUiProps<AddressLocalityPropertyInput> {}

export function SchemaPropertyAddressLocality({ value: legacyValue, description = "The locality in which the street address is, and which is in the region. For example, Mountain View.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAddressLocalityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddressLocalityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-address-locality",
    shellClassName: "lander-semantic--schema-property-address-locality",
    title: "addressLocality",
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

(SchemaPropertyAddressLocality as typeof SchemaPropertyAddressLocality & { toStructuredData: (props: SchemaPropertyAddressLocalityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
