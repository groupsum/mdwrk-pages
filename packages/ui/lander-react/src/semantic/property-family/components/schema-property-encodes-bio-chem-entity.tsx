import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodesBioChemEntityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEncodesBioChemEntity({ value, description = "Another BioChemEntity encoded by this one. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEncodesBioChemEntityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodesBioChemEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encodes-bio-chem-entity",
    shellClassName: "lander-semantic--schema-property-encodes-bio-chem-entity",
    title: "encodesBioChemEntity",
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
