import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformersProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPerformers({ value, description = "The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPerformersProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performers",
    shellClassName: "lander-semantic--schema-property-performers",
    title: "performers",
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
