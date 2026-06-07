import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FoundingDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundingDateProps extends FoundingDatePropertyInput, GeneratedPropertyUiProps<FoundingDatePropertyInput> {}

export function SchemaPropertyFoundingDate({ value: legacyValue, description = "The date that this organization was founded.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFoundingDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundingDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founding-date",
    shellClassName: "lander-semantic--schema-property-founding-date",
    title: "foundingDate",
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

(SchemaPropertyFoundingDate as typeof SchemaPropertyFoundingDate & { toStructuredData: (props: SchemaPropertyFoundingDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
