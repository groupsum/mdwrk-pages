import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAgentInteractionStatisticProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAgentInteractionStatistic({ value, description = "The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAgentInteractionStatisticProps) {
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
