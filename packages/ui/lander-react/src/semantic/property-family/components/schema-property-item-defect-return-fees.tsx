import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnFeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemDefectReturnFees({ value, description = "The type of return fees for returns of defect products.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemDefectReturnFeesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnFeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-fees",
    shellClassName: "lander-semantic--schema-property-item-defect-return-fees",
    title: "itemDefectReturnFees",
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
