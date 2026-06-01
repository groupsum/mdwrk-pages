import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedMediaPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedMediaProps extends AssociatedMediaPropertyInput, GeneratedPropertyUiProps<AssociatedMediaPropertyInput> {}

export function SchemaPropertyAssociatedMedia({ value: legacyValue, description = "A media object that encodes this CreativeWork. This property is a synonym for encoding.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedMediaProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedMediaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-media",
    shellClassName: "lander-semantic--schema-property-associated-media",
    title: "associatedMedia",
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
