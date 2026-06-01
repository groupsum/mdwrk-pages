import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiagnosisProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDiagnosis({ value, description = "One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDiagnosisProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiagnosisPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diagnosis",
    shellClassName: "lander-semantic--schema-property-diagnosis",
    title: "diagnosis",
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
