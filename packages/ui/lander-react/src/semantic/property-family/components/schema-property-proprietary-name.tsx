import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProprietaryNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProprietaryNameProps extends ProprietaryNamePropertyInput, GeneratedPropertyUiProps<ProprietaryNamePropertyInput> {}

export function SchemaPropertyProprietaryName({ value: legacyValue, description = "Proprietary name given to the diet plan, typically by its originator or creator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProprietaryNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProprietaryNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-proprietary-name",
    shellClassName: "lander-semantic--schema-property-proprietary-name",
    title: "proprietaryName",
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
