import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BitratePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBitrateProps extends BitratePropertyInput, GeneratedPropertyUiProps<BitratePropertyInput> {}

export function SchemaPropertyBitrate({ value: legacyValue, description = "The bitrate of the media object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBitrateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBitrate as typeof SchemaPropertyBitrate & { toStructuredData: (props: SchemaPropertyBitrateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
