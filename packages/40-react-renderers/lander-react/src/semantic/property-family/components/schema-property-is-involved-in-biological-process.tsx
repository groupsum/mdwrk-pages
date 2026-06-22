import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsInvolvedInBiologicalProcessPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsInvolvedInBiologicalProcessProps extends IsInvolvedInBiologicalProcessPropertyInput, GeneratedPropertyUiProps<IsInvolvedInBiologicalProcessPropertyInput> {}

export function SchemaPropertyIsInvolvedInBiologicalProcess({ value: legacyValue, description = "Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsInvolvedInBiologicalProcessProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsInvolvedInBiologicalProcessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-involved-in-biological-process",
    shellClassName: "lander-semantic--schema-property-is-involved-in-biological-process",
    title: "isInvolvedInBiologicalProcess",
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

(SchemaPropertyIsInvolvedInBiologicalProcess as typeof SchemaPropertyIsInvolvedInBiologicalProcess & { toStructuredData: (props: SchemaPropertyIsInvolvedInBiologicalProcessProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
