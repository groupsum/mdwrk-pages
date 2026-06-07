import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RxcuiPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRxcuiProps extends RxcuiPropertyInput, GeneratedPropertyUiProps<RxcuiPropertyInput> {}

export function SchemaPropertyRxcui({ value: legacyValue, description = "The RxCUI drug identifier from RXNORM.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRxcuiProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RxcuiPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-rxcui",
    shellClassName: "lander-semantic--schema-property-rxcui",
    title: "rxcui",
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

(SchemaPropertyRxcui as typeof SchemaPropertyRxcui & { toStructuredData: (props: SchemaPropertyRxcuiProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
