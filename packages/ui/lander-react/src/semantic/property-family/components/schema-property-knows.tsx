import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { KnowsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsProps extends KnowsPropertyInput, GeneratedPropertyUiProps<KnowsPropertyInput> {}

export function SchemaPropertyKnows({ value: legacyValue, description = "The most generic bi-directional social/work relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyKnowsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KnowsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-knows",
    shellClassName: "lander-semantic--schema-property-knows",
    title: "knows",
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

(SchemaPropertyKnows as typeof SchemaPropertyKnows & { toStructuredData: (props: SchemaPropertyKnowsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
