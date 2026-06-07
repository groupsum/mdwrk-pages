import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OverdosagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOverdosageProps extends OverdosagePropertyInput, GeneratedPropertyUiProps<OverdosagePropertyInput> {}

export function SchemaPropertyOverdosage({ value: legacyValue, description = "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOverdosageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OverdosagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-overdosage",
    shellClassName: "lander-semantic--schema-property-overdosage",
    title: "overdosage",
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

(SchemaPropertyOverdosage as typeof SchemaPropertyOverdosage & { toStructuredData: (props: SchemaPropertyOverdosageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
