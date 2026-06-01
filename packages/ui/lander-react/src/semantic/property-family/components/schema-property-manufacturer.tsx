import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyManufacturerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyManufacturer({ value, description = "The manufacturer of the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyManufacturerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ManufacturerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-manufacturer",
    shellClassName: "lander-semantic--schema-property-manufacturer",
    title: "manufacturer",
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
