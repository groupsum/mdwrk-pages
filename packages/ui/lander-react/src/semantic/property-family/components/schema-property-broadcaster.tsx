import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcasterProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcaster({ value, description = "The organization owning or operating the broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcasterProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcasterPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcaster",
    shellClassName: "lander-semantic--schema-property-broadcaster",
    title: "broadcaster",
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
