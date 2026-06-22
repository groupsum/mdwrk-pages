import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasBioChemEntityPartPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBioChemEntityPartProps extends HasBioChemEntityPartPropertyInput, GeneratedPropertyUiProps<HasBioChemEntityPartPropertyInput> {}

export function SchemaPropertyHasBioChemEntityPart({ value: legacyValue, description = "Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasBioChemEntityPartProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasBioChemEntityPartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-bio-chem-entity-part",
    shellClassName: "lander-semantic--schema-property-has-bio-chem-entity-part",
    title: "hasBioChemEntityPart",
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

(SchemaPropertyHasBioChemEntityPart as typeof SchemaPropertyHasBioChemEntityPart & { toStructuredData: (props: SchemaPropertyHasBioChemEntityPartProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
