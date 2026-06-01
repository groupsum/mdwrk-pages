import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBrandProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBrand({ value, description = "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBrandProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BrandPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-brand",
    shellClassName: "lander-semantic--schema-property-brand",
    title: "brand",
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
