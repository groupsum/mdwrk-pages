import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ChildrenPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyChildrenProps extends ChildrenPropertyInput, GeneratedPropertyUiProps<ChildrenPropertyInput> {}

export function SchemaPropertyChildren({ value: legacyValue, description = "A child of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyChildrenProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ChildrenPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-children",
    shellClassName: "lander-semantic--schema-property-children",
    title: "children",
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

(SchemaPropertyChildren as typeof SchemaPropertyChildren & { toStructuredData: (props: SchemaPropertyChildrenProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
