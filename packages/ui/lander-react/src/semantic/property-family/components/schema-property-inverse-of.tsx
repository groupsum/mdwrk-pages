import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InverseOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInverseOfProps extends InverseOfPropertyInput, GeneratedPropertyUiProps<InverseOfPropertyInput> {}

export function SchemaPropertyInverseOf({ value: legacyValue, description = "Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInverseOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InverseOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-inverse-of",
    shellClassName: "lander-semantic--schema-property-inverse-of",
    title: "inverseOf",
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
