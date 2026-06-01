import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTimeRequiredProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTimeRequired({ value, description = "Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTimeRequiredProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TimeRequiredPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-time-required",
    shellClassName: "lander-semantic--schema-property-time-required",
    title: "timeRequired",
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
