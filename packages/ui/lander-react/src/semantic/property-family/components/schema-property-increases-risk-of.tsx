import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncreasesRiskOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncreasesRiskOf({ value, description = "The condition, complication, etc. influenced by this factor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncreasesRiskOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncreasesRiskOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-increases-risk-of",
    shellClassName: "lander-semantic--schema-property-increases-risk-of",
    title: "increasesRiskOf",
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
