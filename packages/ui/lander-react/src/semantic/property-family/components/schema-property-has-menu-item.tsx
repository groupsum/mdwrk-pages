import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMenuItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMenuItemProps extends HasMenuItemPropertyInput, GeneratedPropertyUiProps<HasMenuItemPropertyInput> {}

export function SchemaPropertyHasMenuItem({ value: legacyValue, description = "A food or drink item contained in a menu or menu section.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMenuItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMenuItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-menu-item",
    shellClassName: "lander-semantic--schema-property-has-menu-item",
    title: "hasMenuItem",
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
