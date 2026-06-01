import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFeatureListProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFeatureList({ value, description = "Features or modules provided by this application (and possibly required by other applications).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFeatureListProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FeatureListPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-feature-list",
    shellClassName: "lander-semantic--schema-property-feature-list",
    title: "featureList",
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
