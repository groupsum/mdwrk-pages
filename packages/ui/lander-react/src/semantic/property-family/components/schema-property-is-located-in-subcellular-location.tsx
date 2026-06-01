import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsLocatedInSubcellularLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsLocatedInSubcellularLocationProps extends IsLocatedInSubcellularLocationPropertyInput, GeneratedPropertyUiProps<IsLocatedInSubcellularLocationPropertyInput> {}

export function SchemaPropertyIsLocatedInSubcellularLocation({ value: legacyValue, description = "Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsLocatedInSubcellularLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsLocatedInSubcellularLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-located-in-subcellular-location",
    shellClassName: "lander-semantic--schema-property-is-located-in-subcellular-location",
    title: "isLocatedInSubcellularLocation",
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
