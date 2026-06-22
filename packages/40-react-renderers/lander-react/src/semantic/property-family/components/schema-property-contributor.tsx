import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContributorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContributorProps extends ContributorPropertyInput, GeneratedPropertyUiProps<ContributorPropertyInput> {}

export function SchemaPropertyContributor({ value: legacyValue, description = "A secondary contributor to the CreativeWork or Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContributorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyContributor as typeof SchemaPropertyContributor & { toStructuredData: (props: SchemaPropertyContributorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
