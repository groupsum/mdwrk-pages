import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnLabelSourceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemDefectReturnLabelSource({ value, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a defect product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemDefectReturnLabelSourceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnLabelSourcePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-label-source",
    shellClassName: "lander-semantic--schema-property-item-defect-return-label-source",
    title: "itemDefectReturnLabelSource",
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
