import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRefundTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRefundType({ value, description = "A refund type, from an enumerated list.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRefundTypeProps) {
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
