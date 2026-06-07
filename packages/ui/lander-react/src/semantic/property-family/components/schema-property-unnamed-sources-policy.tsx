import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UnnamedSourcesPolicyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnnamedSourcesPolicyProps extends UnnamedSourcesPolicyPropertyInput, GeneratedPropertyUiProps<UnnamedSourcesPolicyPropertyInput> {}

export function SchemaPropertyUnnamedSourcesPolicy({ value: legacyValue, description = "For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUnnamedSourcesPolicyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyUnnamedSourcesPolicy as typeof SchemaPropertyUnnamedSourcesPolicy & { toStructuredData: (props: SchemaPropertyUnnamedSourcesPolicyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
