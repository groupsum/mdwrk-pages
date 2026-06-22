import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LegalAddressPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalAddressProps extends LegalAddressPropertyInput, GeneratedPropertyUiProps<LegalAddressPropertyInput> {}

export function SchemaPropertyLegalAddress({ value: legacyValue, description = "The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLegalAddressProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalAddressPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-address",
    shellClassName: "lander-semantic--schema-property-legal-address",
    title: "legalAddress",
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

(SchemaPropertyLegalAddress as typeof SchemaPropertyLegalAddress & { toStructuredData: (props: SchemaPropertyLegalAddressProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
