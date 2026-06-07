import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MedicalAudiencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMedicalAudienceProps extends MedicalAudiencePropertyInput, GeneratedPropertyUiProps<MedicalAudiencePropertyInput> {}

export function SchemaPropertyMedicalAudience({ value: legacyValue, description = "Medical audience for page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMedicalAudienceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMedicalAudience as typeof SchemaPropertyMedicalAudience & { toStructuredData: (props: SchemaPropertyMedicalAudienceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
