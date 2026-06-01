import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarrantyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWarranty({ value, description = "The warranty promise(s) included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWarrantyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarrantyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warranty",
    shellClassName: "lander-semantic--schema-property-warranty",
    title: "warranty",
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
