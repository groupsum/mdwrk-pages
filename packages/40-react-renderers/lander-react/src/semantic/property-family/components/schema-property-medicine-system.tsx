import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MedicineSystemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedicineSystemProps extends MedicineSystemPropertyInput, GeneratedPropertyUiProps<MedicineSystemPropertyInput> {}

export function SchemaPropertyMedicineSystem({ value: legacyValue, description = "The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMedicineSystemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MedicineSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-medicine-system",
    shellClassName: "lander-semantic--schema-property-medicine-system",
    title: "medicineSystem",
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

(SchemaPropertyMedicineSystem as typeof SchemaPropertyMedicineSystem & { toStructuredData: (props: SchemaPropertyMedicineSystemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
