import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActionProcessPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionProcessProps extends ActionProcessPropertyInput, GeneratedPropertyUiProps<ActionProcessPropertyInput> {}

export function SchemaPropertyActionProcess({ value: legacyValue, description = "Description of the process by which the action was performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActionProcessProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionProcessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-process",
    shellClassName: "lander-semantic--schema-property-action-process",
    title: "actionProcess",
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

(SchemaPropertyActionProcess as typeof SchemaPropertyActionProcess & { toStructuredData: (props: SchemaPropertyActionProcessProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
