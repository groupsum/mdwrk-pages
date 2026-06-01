import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractionTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInteractionType({ value, description = "The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInteractionTypeProps) {
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
