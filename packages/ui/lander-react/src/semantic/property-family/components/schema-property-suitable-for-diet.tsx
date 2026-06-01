import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuitableForDietPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuitableForDietProps extends SuitableForDietPropertyInput, GeneratedPropertyUiProps<SuitableForDietPropertyInput> {}

export function SchemaPropertySuitableForDiet({ value: legacyValue, description = "Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuitableForDietProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuitableForDietPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suitable-for-diet",
    shellClassName: "lander-semantic--schema-property-suitable-for-diet",
    title: "suitableForDiet",
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
