import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SecondaryPreventionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySecondaryPreventionProps extends SecondaryPreventionPropertyInput, GeneratedPropertyUiProps<SecondaryPreventionPropertyInput> {}

export function SchemaPropertySecondaryPrevention({ value: legacyValue, description = "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySecondaryPreventionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SecondaryPreventionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-secondary-prevention",
    shellClassName: "lander-semantic--schema-property-secondary-prevention",
    title: "secondaryPrevention",
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
