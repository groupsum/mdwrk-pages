import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedicineSystemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMedicineSystem({ value, description = "The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMedicineSystemProps) {
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
