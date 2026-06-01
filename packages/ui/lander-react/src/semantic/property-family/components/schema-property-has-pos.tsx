import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasPOSProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasPOS({ value, description = "Points-of-Sales operated by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasPOSProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasPOSPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-pos",
    shellClassName: "lander-semantic--schema-property-has-pos",
    title: "hasPOS",
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
