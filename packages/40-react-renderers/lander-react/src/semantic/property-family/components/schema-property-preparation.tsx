import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PreparationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreparationProps extends PreparationPropertyInput, GeneratedPropertyUiProps<PreparationPropertyInput> {}

export function SchemaPropertyPreparation({ value: legacyValue, description = "Typical preparation that a patient must undergo before having the procedure performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPreparationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreparationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-preparation",
    shellClassName: "lander-semantic--schema-property-preparation",
    title: "preparation",
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

(SchemaPropertyPreparation as typeof SchemaPropertyPreparation & { toStructuredData: (props: SchemaPropertyPreparationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
