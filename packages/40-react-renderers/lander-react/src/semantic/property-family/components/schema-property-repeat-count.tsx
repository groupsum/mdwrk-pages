import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RepeatCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepeatCountProps extends RepeatCountPropertyInput, GeneratedPropertyUiProps<RepeatCountPropertyInput> {}

export function SchemaPropertyRepeatCount({ value: legacyValue, description = "Defines the number of times a recurring [[Event]] will take place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRepeatCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RepeatCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-repeat-count",
    shellClassName: "lander-semantic--schema-property-repeat-count",
    title: "repeatCount",
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

(SchemaPropertyRepeatCount as typeof SchemaPropertyRepeatCount & { toStructuredData: (props: SchemaPropertyRepeatCountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
