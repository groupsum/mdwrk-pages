import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeasonalOverrideProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySeasonalOverride({ value, description = "Limited period during which these shipping conditions apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySeasonalOverrideProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeasonalOverridePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-seasonal-override",
    shellClassName: "lander-semantic--schema-property-seasonal-override",
    title: "seasonalOverride",
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
