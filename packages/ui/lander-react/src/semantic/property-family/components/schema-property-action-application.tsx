import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActionApplicationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionApplicationProps extends ActionApplicationPropertyInput, GeneratedPropertyUiProps<ActionApplicationPropertyInput> {}

export function SchemaPropertyActionApplication({ value: legacyValue, description = "An application that can complete the request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActionApplicationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionApplicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-application",
    shellClassName: "lander-semantic--schema-property-action-application",
    title: "actionApplication",
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

(SchemaPropertyActionApplication as typeof SchemaPropertyActionApplication & { toStructuredData: (props: SchemaPropertyActionApplicationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
