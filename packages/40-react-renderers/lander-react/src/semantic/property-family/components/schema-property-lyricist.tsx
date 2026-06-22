import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LyricistPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLyricistProps extends LyricistPropertyInput, GeneratedPropertyUiProps<LyricistPropertyInput> {}

export function SchemaPropertyLyricist({ value: legacyValue, description = "The person who wrote the words.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLyricistProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LyricistPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lyricist",
    shellClassName: "lander-semantic--schema-property-lyricist",
    title: "lyricist",
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

(SchemaPropertyLyricist as typeof SchemaPropertyLyricist & { toStructuredData: (props: SchemaPropertyLyricistProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
