import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlcoholWarningPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlcoholWarningProps extends AlcoholWarningPropertyInput, GeneratedPropertyUiProps<AlcoholWarningPropertyInput> {}

export function SchemaPropertyAlcoholWarning({ value: legacyValue, description = "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlcoholWarningProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlcoholWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alcohol-warning",
    shellClassName: "lander-semantic--schema-property-alcohol-warning",
    title: "alcoholWarning",
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

(SchemaPropertyAlcoholWarning as typeof SchemaPropertyAlcoholWarning & { toStructuredData: (props: SchemaPropertyAlcoholWarningProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
