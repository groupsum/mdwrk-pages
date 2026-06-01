import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastSignalModulationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastSignalModulation({ value, description = "The modulation (e.g. FM, AM, etc) used by a particular broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastSignalModulationProps) {
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
