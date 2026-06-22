import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InteractionTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionTypeProps extends InteractionTypePropertyInput, GeneratedPropertyUiProps<InteractionTypePropertyInput> {}

export function SchemaPropertyInteractionType({ value: legacyValue, description = "The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInteractionTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractionTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interaction-type",
    shellClassName: "lander-semantic--schema-property-interaction-type",
    title: "interactionType",
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

(SchemaPropertyInteractionType as typeof SchemaPropertyInteractionType & { toStructuredData: (props: SchemaPropertyInteractionTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
