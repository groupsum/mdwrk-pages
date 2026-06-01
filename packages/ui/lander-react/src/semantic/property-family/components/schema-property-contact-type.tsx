import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContactTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactTypeProps extends ContactTypePropertyInput, GeneratedPropertyUiProps<ContactTypePropertyInput> {}

export function SchemaPropertyContactType({ value: legacyValue, description = "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContactTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-type",
    shellClassName: "lander-semantic--schema-property-contact-type",
    title: "contactType",
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
