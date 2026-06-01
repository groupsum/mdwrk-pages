import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsProprietaryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsProprietaryProps extends IsProprietaryPropertyInput, GeneratedPropertyUiProps<IsProprietaryPropertyInput> {}

export function SchemaPropertyIsProprietary({ value: legacyValue, description = "True if this item's name is a proprietary/brand name (vs. generic name).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsProprietaryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsProprietaryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-proprietary",
    shellClassName: "lander-semantic--schema-property-is-proprietary",
    title: "isProprietary",
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
