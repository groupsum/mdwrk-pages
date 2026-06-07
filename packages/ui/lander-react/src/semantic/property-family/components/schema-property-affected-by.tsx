import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AffectedByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAffectedByProps extends AffectedByPropertyInput, GeneratedPropertyUiProps<AffectedByPropertyInput> {}

export function SchemaPropertyAffectedBy({ value: legacyValue, description = "Drugs that affect the test's results.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAffectedByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AffectedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-affected-by",
    shellClassName: "lander-semantic--schema-property-affected-by",
    title: "affectedBy",
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

(SchemaPropertyAffectedBy as typeof SchemaPropertyAffectedBy & { toStructuredData: (props: SchemaPropertyAffectedByProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
