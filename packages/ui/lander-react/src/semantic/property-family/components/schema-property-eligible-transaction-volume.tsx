import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleTransactionVolumeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEligibleTransactionVolume({ value, description = "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEligibleTransactionVolumeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleTransactionVolumePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-transaction-volume",
    shellClassName: "lander-semantic--schema-property-eligible-transaction-volume",
    title: "eligibleTransactionVolume",
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
