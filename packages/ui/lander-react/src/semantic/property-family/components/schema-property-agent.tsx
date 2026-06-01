import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAgentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAgent({ value, description = "The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAgentProps) {
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
