import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PregnancyWarningPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPregnancyWarningProps extends PregnancyWarningPropertyInput, GeneratedPropertyUiProps<PregnancyWarningPropertyInput> {}

export function SchemaPropertyPregnancyWarning({ value: legacyValue, description = "Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPregnancyWarningProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PregnancyWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pregnancy-warning",
    shellClassName: "lander-semantic--schema-property-pregnancy-warning",
    title: "pregnancyWarning",
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

(SchemaPropertyPregnancyWarning as typeof SchemaPropertyPregnancyWarning & { toStructuredData: (props: SchemaPropertyPregnancyWarningProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
