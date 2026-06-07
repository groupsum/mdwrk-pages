import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DrugClassPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugClassProps extends DrugClassPropertyInput, GeneratedPropertyUiProps<DrugClassPropertyInput> {}

export function SchemaPropertyDrugClass({ value: legacyValue, description = "The class of drug this belongs to (e.g., statins).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDrugClassProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugClassPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug-class",
    shellClassName: "lander-semantic--schema-property-drug-class",
    title: "drugClass",
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

(SchemaPropertyDrugClass as typeof SchemaPropertyDrugClass & { toStructuredData: (props: SchemaPropertyDrugClassProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
