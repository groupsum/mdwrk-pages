import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClinicalPharmacologyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyClinicalPharmacology({ value, description = "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyClinicalPharmacologyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClinicalPharmacologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-clinical-pharmacology",
    shellClassName: "lander-semantic--schema-property-clinical-pharmacology",
    title: "clinicalPharmacology",
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
