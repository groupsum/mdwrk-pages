import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLeaseLengthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLeaseLength({ value, description = "Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLeaseLengthProps) {
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
