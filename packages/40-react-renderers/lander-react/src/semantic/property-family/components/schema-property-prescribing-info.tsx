import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrescribingInfoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrescribingInfoProps extends PrescribingInfoPropertyInput, GeneratedPropertyUiProps<PrescribingInfoPropertyInput> {}

export function SchemaPropertyPrescribingInfo({ value: legacyValue, description = "Link to prescribing information for the drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrescribingInfoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrescribingInfoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-prescribing-info",
    shellClassName: "lander-semantic--schema-property-prescribing-info",
    title: "prescribingInfo",
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

(SchemaPropertyPrescribingInfo as typeof SchemaPropertyPrescribingInfo & { toStructuredData: (props: SchemaPropertyPrescribingInfoProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
