import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsAvailableGenericallyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAvailableGenericallyProps extends IsAvailableGenericallyPropertyInput, GeneratedPropertyUiProps<IsAvailableGenericallyPropertyInput> {}

export function SchemaPropertyIsAvailableGenerically({ value: legacyValue, description = "True if the drug is available in a generic form (regardless of name).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsAvailableGenericallyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAvailableGenericallyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-available-generically",
    shellClassName: "lander-semantic--schema-property-is-available-generically",
    title: "isAvailableGenerically",
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

(SchemaPropertyIsAvailableGenerically as typeof SchemaPropertyIsAvailableGenerically & { toStructuredData: (props: SchemaPropertyIsAvailableGenericallyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
