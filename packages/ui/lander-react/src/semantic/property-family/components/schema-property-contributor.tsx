import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContributorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContributor({ value, description = "A secondary contributor to the CreativeWork or Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContributorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContributorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contributor",
    shellClassName: "lander-semantic--schema-property-contributor",
    title: "contributor",
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
