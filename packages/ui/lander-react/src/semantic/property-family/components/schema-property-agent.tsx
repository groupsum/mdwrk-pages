import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AgentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAgentProps extends AgentPropertyInput, GeneratedPropertyUiProps<AgentPropertyInput> {}

export function SchemaPropertyAgent({ value: legacyValue, description = "The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAgentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AgentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-agent",
    shellClassName: "lander-semantic--schema-property-agent",
    title: "agent",
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
