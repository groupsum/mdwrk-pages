import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStrengthUnitProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStrengthUnit({ value, description = "The units of an active ingredient's strength, e.g. mg.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStrengthUnitProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StrengthUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-strength-unit",
    shellClassName: "lander-semantic--schema-property-strength-unit",
    title: "strengthUnit",
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
