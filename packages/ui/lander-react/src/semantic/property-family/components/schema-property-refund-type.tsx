import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RefundTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRefundTypeProps extends RefundTypePropertyInput, GeneratedPropertyUiProps<RefundTypePropertyInput> {}

export function SchemaPropertyRefundType({ value: legacyValue, description = "A refund type, from an enumerated list.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRefundTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RefundTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-refund-type",
    shellClassName: "lander-semantic--schema-property-refund-type",
    title: "refundType",
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
