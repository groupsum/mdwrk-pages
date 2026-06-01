import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodesBioChemEntityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodesBioChemEntityProps extends EncodesBioChemEntityPropertyInput, GeneratedPropertyUiProps<EncodesBioChemEntityPropertyInput> {}

export function SchemaPropertyEncodesBioChemEntity({ value: legacyValue, description = "Another BioChemEntity encoded by this one. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodesBioChemEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
