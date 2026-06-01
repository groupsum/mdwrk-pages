import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiresSubscriptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiresSubscriptionProps extends RequiresSubscriptionPropertyInput, GeneratedPropertyUiProps<RequiresSubscriptionPropertyInput> {}

export function SchemaPropertyRequiresSubscription({ value: legacyValue, description = "Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiresSubscriptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiresSubscriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-requires-subscription",
    shellClassName: "lander-semantic--schema-property-requires-subscription",
    title: "requiresSubscription",
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
