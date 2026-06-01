import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnnamedSourcesPolicyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUnnamedSourcesPolicy({ value, description = "For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUnnamedSourcesPolicyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnnamedSourcesPolicyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unnamed-sources-policy",
    shellClassName: "lander-semantic--schema-property-unnamed-sources-policy",
    title: "unnamedSourcesPolicy",
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
