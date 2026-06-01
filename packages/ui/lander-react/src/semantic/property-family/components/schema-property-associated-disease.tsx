import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedDiseaseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedDisease({ value, description = "Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedDiseaseProps) {
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
