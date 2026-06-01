import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUserInteractionCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUserInteractionCount({ value, description = "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUserInteractionCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UserInteractionCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-user-interaction-count",
    shellClassName: "lander-semantic--schema-property-user-interaction-count",
    title: "userInteractionCount",
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
