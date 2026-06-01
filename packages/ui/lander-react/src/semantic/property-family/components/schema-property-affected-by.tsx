import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAffectedByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAffectedBy({ value, description = "Drugs that affect the test's results.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAffectedByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AffectedByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-affected-by",
    shellClassName: "lander-semantic--schema-property-affected-by",
    title: "affectedBy",
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
