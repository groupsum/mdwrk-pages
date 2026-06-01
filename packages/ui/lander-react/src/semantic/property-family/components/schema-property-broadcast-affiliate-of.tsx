import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastAffiliateOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastAffiliateOfProps extends BroadcastAffiliateOfPropertyInput, GeneratedPropertyUiProps<BroadcastAffiliateOfPropertyInput> {}

export function SchemaPropertyBroadcastAffiliateOf({ value: legacyValue, description = "The media network(s) whose content is broadcast on this station.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastAffiliateOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
