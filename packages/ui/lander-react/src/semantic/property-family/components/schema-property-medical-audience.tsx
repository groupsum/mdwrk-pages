import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedicalAudienceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMedicalAudience({ value, description = "Medical audience for page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMedicalAudienceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MedicalAudiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-medical-audience",
    shellClassName: "lander-semantic--schema-property-medical-audience",
    title: "medicalAudience",
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
