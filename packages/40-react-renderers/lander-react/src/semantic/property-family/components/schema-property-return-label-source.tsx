import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnLabelSourcePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnLabelSourceProps extends ReturnLabelSourcePropertyInput, GeneratedPropertyUiProps<ReturnLabelSourcePropertyInput> {}

export function SchemaPropertyReturnLabelSource({ value: legacyValue, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnLabelSourceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnLabelSourcePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-label-source",
    shellClassName: "lander-semantic--schema-property-return-label-source",
    title: "returnLabelSource",
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

(SchemaPropertyReturnLabelSource as typeof SchemaPropertyReturnLabelSource & { toStructuredData: (props: SchemaPropertyReturnLabelSourceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
