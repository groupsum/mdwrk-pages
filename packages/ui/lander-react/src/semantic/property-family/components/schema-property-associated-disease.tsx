import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedDiseasePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedDiseaseProps extends AssociatedDiseasePropertyInput, GeneratedPropertyUiProps<AssociatedDiseasePropertyInput> {}

export function SchemaPropertyAssociatedDisease({ value: legacyValue, description = "Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedDiseaseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedDiseasePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-disease",
    shellClassName: "lander-semantic--schema-property-associated-disease",
    title: "associatedDisease",
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
