import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InteractionServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionServiceProps extends InteractionServicePropertyInput, GeneratedPropertyUiProps<InteractionServicePropertyInput> {}

export function SchemaPropertyInteractionService({ value: legacyValue, description = "The WebSite or SoftwareApplication where the interactions took place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInteractionServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyInteractionService as typeof SchemaPropertyInteractionService & { toStructuredData: (props: SchemaPropertyInteractionServiceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
