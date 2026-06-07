import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ComposerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyComposerProps extends ComposerPropertyInput, GeneratedPropertyUiProps<ComposerPropertyInput> {}

export function SchemaPropertyComposer({ value: legacyValue, description = "The person or organization who wrote a composition, or who is the composer of a work performed at some event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyComposerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ComposerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-composer",
    shellClassName: "lander-semantic--schema-property-composer",
    title: "composer",
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

(SchemaPropertyComposer as typeof SchemaPropertyComposer & { toStructuredData: (props: SchemaPropertyComposerProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
