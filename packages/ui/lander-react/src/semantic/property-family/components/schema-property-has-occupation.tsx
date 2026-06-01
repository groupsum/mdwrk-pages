import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasOccupationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasOccupation({ value, description = "The Person's occupation. For past professions, use Role for expressing dates.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasOccupationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasOccupationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-occupation",
    shellClassName: "lander-semantic--schema-property-has-occupation",
    title: "hasOccupation",
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
