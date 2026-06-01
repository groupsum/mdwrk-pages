import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DosageFormPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDosageFormProps extends DosageFormPropertyInput, GeneratedPropertyUiProps<DosageFormPropertyInput> {}

export function SchemaPropertyDosageForm({ value: legacyValue, description = "A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDosageFormProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DosageFormPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dosage-form",
    shellClassName: "lander-semantic--schema-property-dosage-form",
    title: "dosageForm",
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
