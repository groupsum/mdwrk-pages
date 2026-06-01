import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDosageFormProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDosageForm({ value, description = "A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDosageFormProps) {
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
