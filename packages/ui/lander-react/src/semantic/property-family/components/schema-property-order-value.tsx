import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OrderValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrderValueProps extends OrderValuePropertyInput, GeneratedPropertyUiProps<OrderValuePropertyInput> {}

export function SchemaPropertyOrderValue({ value: legacyValue, description = "Minimum and maximum order value for which these shipping conditions are valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOrderValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OrderValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-order-value",
    shellClassName: "lander-semantic--schema-property-order-value",
    title: "orderValue",
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

(SchemaPropertyOrderValue as typeof SchemaPropertyOrderValue & { toStructuredData: (props: SchemaPropertyOrderValueProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
