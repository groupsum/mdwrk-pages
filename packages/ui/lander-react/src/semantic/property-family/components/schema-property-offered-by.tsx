import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOfferedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOfferedBy({ value, description = "A pointer to the organization or person making the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOfferedByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OfferedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offered-by",
    shellClassName: "lander-semantic--schema-property-offered-by",
    title: "offeredBy",
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
