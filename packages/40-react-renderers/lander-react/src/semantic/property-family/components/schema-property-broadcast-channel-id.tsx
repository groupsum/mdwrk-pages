import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastChannelIdPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastChannelIdProps extends BroadcastChannelIdPropertyInput, GeneratedPropertyUiProps<BroadcastChannelIdPropertyInput> {}

export function SchemaPropertyBroadcastChannelId({ value: legacyValue, description = "The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastChannelIdProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastChannelIdPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-channel-id",
    shellClassName: "lander-semantic--schema-property-broadcast-channel-id",
    title: "broadcastChannelId",
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

(SchemaPropertyBroadcastChannelId as typeof SchemaPropertyBroadcastChannelId & { toStructuredData: (props: SchemaPropertyBroadcastChannelIdProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
