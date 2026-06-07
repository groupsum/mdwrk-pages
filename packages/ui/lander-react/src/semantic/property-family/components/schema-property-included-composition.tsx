import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludedCompositionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedCompositionProps extends IncludedCompositionPropertyInput, GeneratedPropertyUiProps<IncludedCompositionPropertyInput> {}

export function SchemaPropertyIncludedComposition({ value: legacyValue, description = "Smaller compositions included in this work (e.g. a movement in a symphony).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludedCompositionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedCompositionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-composition",
    shellClassName: "lander-semantic--schema-property-included-composition",
    title: "includedComposition",
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

(SchemaPropertyIncludedComposition as typeof SchemaPropertyIncludedComposition & { toStructuredData: (props: SchemaPropertyIncludedCompositionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
