import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastAffiliateOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastAffiliateOf({ value, description = "The media network(s) whose content is broadcast on this station.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastAffiliateOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastAffiliateOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-affiliate-of",
    shellClassName: "lander-semantic--schema-property-broadcast-affiliate-of",
    title: "broadcastAffiliateOf",
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
