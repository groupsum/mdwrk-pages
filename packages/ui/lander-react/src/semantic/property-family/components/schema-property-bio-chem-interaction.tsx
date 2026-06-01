import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BioChemInteractionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBioChemInteractionProps extends BioChemInteractionPropertyInput, GeneratedPropertyUiProps<BioChemInteractionPropertyInput> {}

export function SchemaPropertyBioChemInteraction({ value: legacyValue, description = "A BioChemEntity that is known to interact with this item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBioChemInteractionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BioChemInteractionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-bio-chem-interaction",
    shellClassName: "lander-semantic--schema-property-bio-chem-interaction",
    title: "bioChemInteraction",
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
