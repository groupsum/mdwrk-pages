import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnFeesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnFeesProps extends ReturnFeesPropertyInput, GeneratedPropertyUiProps<ReturnFeesPropertyInput> {}

export function SchemaPropertyReturnFees({ value: legacyValue, description = "The type of return fees for purchased products (for any return reason).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnFeesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnFeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-fees",
    shellClassName: "lander-semantic--schema-property-return-fees",
    title: "returnFees",
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

(SchemaPropertyReturnFees as typeof SchemaPropertyReturnFees & { toStructuredData: (props: SchemaPropertyReturnFeesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
