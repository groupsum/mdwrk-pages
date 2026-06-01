import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasAdultConsiderationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasAdultConsideration({ value, description = "Used to tag an item to be intended or suitable for consumption or use by adults only.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasAdultConsiderationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasAdultConsiderationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-adult-consideration",
    shellClassName: "lander-semantic--schema-property-has-adult-consideration",
    title: "hasAdultConsideration",
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
