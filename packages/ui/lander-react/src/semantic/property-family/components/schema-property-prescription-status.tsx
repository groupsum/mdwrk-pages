import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrescriptionStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrescriptionStatus({ value, description = "Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrescriptionStatusProps) {
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
