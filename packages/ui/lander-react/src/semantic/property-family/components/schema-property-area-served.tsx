import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAreaServedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAreaServed({ value, description = "The geographic area where a service or offered item is provided.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAreaServedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AreaServedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-area-served",
    shellClassName: "lander-semantic--schema-property-area-served",
    title: "areaServed",
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
