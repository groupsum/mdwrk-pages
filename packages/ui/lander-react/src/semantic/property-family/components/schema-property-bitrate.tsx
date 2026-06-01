import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBitrateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBitrate({ value, description = "The bitrate of the media object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBitrateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BitratePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-bitrate",
    shellClassName: "lander-semantic--schema-property-bitrate",
    title: "bitrate",
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
