import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EligibleTransactionVolumePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleTransactionVolumeProps extends EligibleTransactionVolumePropertyInput, GeneratedPropertyUiProps<EligibleTransactionVolumePropertyInput> {}

export function SchemaPropertyEligibleTransactionVolume({ value: legacyValue, description = "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEligibleTransactionVolumeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEligibleTransactionVolume as typeof SchemaPropertyEligibleTransactionVolume & { toStructuredData: (props: SchemaPropertyEligibleTransactionVolumeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
