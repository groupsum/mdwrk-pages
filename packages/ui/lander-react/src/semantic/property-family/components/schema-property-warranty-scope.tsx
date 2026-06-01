import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarrantyScopeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWarrantyScope({ value, description = "The scope of the warranty promise.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWarrantyScopeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarrantyScopePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warranty-scope",
    shellClassName: "lander-semantic--schema-property-warranty-scope",
    title: "warrantyScope",
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
