import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActionStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionStatusProps extends ActionStatusPropertyInput, GeneratedPropertyUiProps<ActionStatusPropertyInput> {}

export function SchemaPropertyActionStatus({ value: legacyValue, description = "Indicates the current disposition of the Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActionStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-status",
    shellClassName: "lander-semantic--schema-property-action-status",
    title: "actionStatus",
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

(SchemaPropertyActionStatus as typeof SchemaPropertyActionStatus & { toStructuredData: (props: SchemaPropertyActionStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
