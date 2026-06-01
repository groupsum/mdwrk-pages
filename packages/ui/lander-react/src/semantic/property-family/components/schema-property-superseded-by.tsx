import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SupersededByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupersededByProps extends SupersededByPropertyInput, GeneratedPropertyUiProps<SupersededByPropertyInput> {}

export function SchemaPropertySupersededBy({ value: legacyValue, description = "Relates a term (i.e. a property, class or enumeration) to one that supersedes it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySupersededByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SupersededByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-superseded-by",
    shellClassName: "lander-semantic--schema-property-superseded-by",
    title: "supersededBy",
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
