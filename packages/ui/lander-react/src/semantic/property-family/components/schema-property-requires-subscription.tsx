import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiresSubscriptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiresSubscription({ value, description = "Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiresSubscriptionProps) {
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
