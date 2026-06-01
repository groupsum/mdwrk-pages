import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsEncodedByBioChemEntityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsEncodedByBioChemEntity({ value, description = "Another BioChemEntity encoding by this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsEncodedByBioChemEntityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsEncodedByBioChemEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-encoded-by-bio-chem-entity",
    shellClassName: "lander-semantic--schema-property-is-encoded-by-bio-chem-entity",
    title: "isEncodedByBioChemEntity",
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
