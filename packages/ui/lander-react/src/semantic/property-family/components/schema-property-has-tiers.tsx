import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasTiersProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasTiers({ value, description = "The tiers of a member program.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasTiersProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasTiersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-tiers",
    shellClassName: "lander-semantic--schema-property-has-tiers",
    title: "hasTiers",
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
