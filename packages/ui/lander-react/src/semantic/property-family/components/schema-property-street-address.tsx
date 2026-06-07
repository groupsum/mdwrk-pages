import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StreetAddressPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStreetAddressProps extends StreetAddressPropertyInput, GeneratedPropertyUiProps<StreetAddressPropertyInput> {}

export function SchemaPropertyStreetAddress({ value: legacyValue, description = "The street address. For example, 1600 Amphitheatre Pkwy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStreetAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StreetAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-street-address",
    shellClassName: "lander-semantic--schema-property-street-address",
    title: "streetAddress",
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

(SchemaPropertyStreetAddress as typeof SchemaPropertyStreetAddress & { toStructuredData: (props: SchemaPropertyStreetAddressProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
