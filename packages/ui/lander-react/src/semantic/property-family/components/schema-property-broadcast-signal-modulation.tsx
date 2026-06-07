import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastSignalModulationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastSignalModulationProps extends BroadcastSignalModulationPropertyInput, GeneratedPropertyUiProps<BroadcastSignalModulationPropertyInput> {}

export function SchemaPropertyBroadcastSignalModulation({ value: legacyValue, description = "The modulation (e.g. FM, AM, etc) used by a particular broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastSignalModulationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastSignalModulationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-signal-modulation",
    shellClassName: "lander-semantic--schema-property-broadcast-signal-modulation",
    title: "broadcastSignalModulation",
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

(SchemaPropertyBroadcastSignalModulation as typeof SchemaPropertyBroadcastSignalModulation & { toStructuredData: (props: SchemaPropertyBroadcastSignalModulationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
