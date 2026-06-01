import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnFeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReturnFees({ value, description = "The type of return fees for purchased products (for any return reason).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReturnFeesProps) {
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
