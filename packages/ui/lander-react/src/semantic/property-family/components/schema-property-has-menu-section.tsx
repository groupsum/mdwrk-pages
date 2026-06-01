import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMenuSectionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMenuSectionProps extends HasMenuSectionPropertyInput, GeneratedPropertyUiProps<HasMenuSectionPropertyInput> {}

export function SchemaPropertyHasMenuSection({ value: legacyValue, description = "A subgrouping of the menu (by dishes, course, serving time period, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMenuSectionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMenuSectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-menu-section",
    shellClassName: "lander-semantic--schema-property-has-menu-section",
    title: "hasMenuSection",
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
