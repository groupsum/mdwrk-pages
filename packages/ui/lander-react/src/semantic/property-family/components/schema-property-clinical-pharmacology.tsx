import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ClinicalPharmacologyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClinicalPharmacologyProps extends ClinicalPharmacologyPropertyInput, GeneratedPropertyUiProps<ClinicalPharmacologyPropertyInput> {}

export function SchemaPropertyClinicalPharmacology({ value: legacyValue, description = "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyClinicalPharmacologyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyClinicalPharmacology as typeof SchemaPropertyClinicalPharmacology & { toStructuredData: (props: SchemaPropertyClinicalPharmacologyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
