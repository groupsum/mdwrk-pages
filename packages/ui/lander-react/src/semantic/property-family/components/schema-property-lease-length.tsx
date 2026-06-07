import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LeaseLengthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLeaseLengthProps extends LeaseLengthPropertyInput, GeneratedPropertyUiProps<LeaseLengthPropertyInput> {}

export function SchemaPropertyLeaseLength({ value: legacyValue, description = "Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLeaseLengthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LeaseLengthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lease-length",
    shellClassName: "lander-semantic--schema-property-lease-length",
    title: "leaseLength",
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

(SchemaPropertyLeaseLength as typeof SchemaPropertyLeaseLength & { toStructuredData: (props: SchemaPropertyLeaseLengthProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
