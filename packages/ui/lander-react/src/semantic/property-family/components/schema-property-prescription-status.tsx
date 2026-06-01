import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrescriptionStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrescriptionStatusProps extends PrescriptionStatusPropertyInput, GeneratedPropertyUiProps<PrescriptionStatusPropertyInput> {}

export function SchemaPropertyPrescriptionStatus({ value: legacyValue, description = "Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrescriptionStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrescriptionStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-prescription-status",
    shellClassName: "lander-semantic--schema-property-prescription-status",
    title: "prescriptionStatus",
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
