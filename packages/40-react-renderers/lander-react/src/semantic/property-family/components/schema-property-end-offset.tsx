import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EndOffsetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndOffsetProps extends EndOffsetPropertyInput, GeneratedPropertyUiProps<EndOffsetPropertyInput> {}

export function SchemaPropertyEndOffset({ value: legacyValue, description = "The end time of the clip expressed as the number of seconds from the beginning of the work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEndOffsetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndOffsetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-end-offset",
    shellClassName: "lander-semantic--schema-property-end-offset",
    title: "endOffset",
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

(SchemaPropertyEndOffset as typeof SchemaPropertyEndOffset & { toStructuredData: (props: SchemaPropertyEndOffsetProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
