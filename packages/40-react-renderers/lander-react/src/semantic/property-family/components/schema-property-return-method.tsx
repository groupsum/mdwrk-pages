import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnMethodProps extends ReturnMethodPropertyInput, GeneratedPropertyUiProps<ReturnMethodPropertyInput> {}

export function SchemaPropertyReturnMethod({ value: legacyValue, description = "The type of return method offered, specified from an enumeration.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-method",
    shellClassName: "lander-semantic--schema-property-return-method",
    title: "returnMethod",
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

(SchemaPropertyReturnMethod as typeof SchemaPropertyReturnMethod & { toStructuredData: (props: SchemaPropertyReturnMethodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
