import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastSubChannelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastSubChannelProps extends BroadcastSubChannelPropertyInput, GeneratedPropertyUiProps<BroadcastSubChannelPropertyInput> {}

export function SchemaPropertyBroadcastSubChannel({ value: legacyValue, description = "The subchannel used for the broadcast.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastSubChannelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastSubChannelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-sub-channel",
    shellClassName: "lander-semantic--schema-property-broadcast-sub-channel",
    title: "broadcastSubChannel",
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

(SchemaPropertyBroadcastSubChannel as typeof SchemaPropertyBroadcastSubChannel & { toStructuredData: (props: SchemaPropertyBroadcastSubChannelProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
