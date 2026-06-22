import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DepthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepthProps extends DepthPropertyInput, GeneratedPropertyUiProps<DepthPropertyInput> {}

export function SchemaPropertyDepth({ value: legacyValue, description = "The depth of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDepthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DepthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-depth",
    shellClassName: "lander-semantic--schema-property-depth",
    title: "depth",
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

(SchemaPropertyDepth as typeof SchemaPropertyDepth & { toStructuredData: (props: SchemaPropertyDepthProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
