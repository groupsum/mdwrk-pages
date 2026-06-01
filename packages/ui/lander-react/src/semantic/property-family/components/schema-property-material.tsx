import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaterialProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaterial({ value, description = "A material that something is made from, e.g. leather, wool, cotton, paper.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaterialProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaterialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-material",
    shellClassName: "lander-semantic--schema-property-material",
    title: "material",
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
