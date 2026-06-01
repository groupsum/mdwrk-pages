import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInteractionService({ value, description = "The WebSite or SoftwareApplication where the interactions took place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInteractionServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractionServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interaction-service",
    shellClassName: "lander-semantic--schema-property-interaction-service",
    title: "interactionService",
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
