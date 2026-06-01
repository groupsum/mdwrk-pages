import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionPlatformProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActionPlatform({ value, description = "The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActionPlatformProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionPlatformPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-platform",
    shellClassName: "lander-semantic--schema-property-action-platform",
    title: "actionPlatform",
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
