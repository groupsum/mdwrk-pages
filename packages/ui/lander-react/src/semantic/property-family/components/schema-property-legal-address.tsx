import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalAddressProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLegalAddress({ value, description = "The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLegalAddressProps) {
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
