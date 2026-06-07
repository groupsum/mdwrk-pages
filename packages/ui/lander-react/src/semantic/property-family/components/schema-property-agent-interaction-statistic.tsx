import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AgentInteractionStatisticPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAgentInteractionStatisticProps extends AgentInteractionStatisticPropertyInput, GeneratedPropertyUiProps<AgentInteractionStatisticPropertyInput> {}

export function SchemaPropertyAgentInteractionStatistic({ value: legacyValue, description = "The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAgentInteractionStatisticProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AgentInteractionStatisticPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-agent-interaction-statistic",
    shellClassName: "lander-semantic--schema-property-agent-interaction-statistic",
    title: "agentInteractionStatistic",
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

(SchemaPropertyAgentInteractionStatistic as typeof SchemaPropertyAgentInteractionStatistic & { toStructuredData: (props: SchemaPropertyAgentInteractionStatisticProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
