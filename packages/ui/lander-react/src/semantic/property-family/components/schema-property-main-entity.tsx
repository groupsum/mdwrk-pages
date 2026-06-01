import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainEntityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMainEntity({ value, description = "Indicates the primary entity described in some page or other CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMainEntityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MainEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-main-entity",
    shellClassName: "lander-semantic--schema-property-main-entity",
    title: "mainEntity",
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
