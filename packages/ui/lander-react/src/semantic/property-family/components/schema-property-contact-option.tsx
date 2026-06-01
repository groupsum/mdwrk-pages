import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContactOptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactOptionProps extends ContactOptionPropertyInput, GeneratedPropertyUiProps<ContactOptionPropertyInput> {}

export function SchemaPropertyContactOption({ value: legacyValue, description = "An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContactOptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactOptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-option",
    shellClassName: "lander-semantic--schema-property-contact-option",
    title: "contactOption",
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
