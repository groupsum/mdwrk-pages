import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FeatureListPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFeatureListProps extends FeatureListPropertyInput, GeneratedPropertyUiProps<FeatureListPropertyInput> {}

export function SchemaPropertyFeatureList({ value: legacyValue, description = "Features or modules provided by this application (and possibly required by other applications).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFeatureListProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyFeatureList as typeof SchemaPropertyFeatureList & { toStructuredData: (props: SchemaPropertyFeatureListProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
