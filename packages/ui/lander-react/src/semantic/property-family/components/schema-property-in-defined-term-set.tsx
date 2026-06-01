import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InDefinedTermSetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInDefinedTermSetProps extends InDefinedTermSetPropertyInput, GeneratedPropertyUiProps<InDefinedTermSetPropertyInput> {}

export function SchemaPropertyInDefinedTermSet({ value: legacyValue, description = "A [[DefinedTermSet]] that contains this term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInDefinedTermSetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InDefinedTermSetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-defined-term-set",
    shellClassName: "lander-semantic--schema-property-in-defined-term-set",
    title: "inDefinedTermSet",
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
