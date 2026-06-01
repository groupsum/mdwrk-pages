import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableStrengthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableStrength({ value, description = "An available dosage strength for the drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableStrengthProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableStrengthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-strength",
    shellClassName: "lander-semantic--schema-property-available-strength",
    title: "availableStrength",
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
