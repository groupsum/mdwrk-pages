import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServicePostalAddressPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServicePostalAddressProps extends ServicePostalAddressPropertyInput, GeneratedPropertyUiProps<ServicePostalAddressPropertyInput> {}

export function SchemaPropertyServicePostalAddress({ value: legacyValue, description = "The address for accessing the service by mail.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServicePostalAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServicePostalAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-postal-address",
    shellClassName: "lander-semantic--schema-property-service-postal-address",
    title: "servicePostalAddress",
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

(SchemaPropertyServicePostalAddress as typeof SchemaPropertyServicePostalAddress & { toStructuredData: (props: SchemaPropertyServicePostalAddressProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
