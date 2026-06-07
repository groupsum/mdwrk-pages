import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsrcCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsrcCodeProps extends IsrcCodePropertyInput, GeneratedPropertyUiProps<IsrcCodePropertyInput> {}

export function SchemaPropertyIsrcCode({ value: legacyValue, description = "The International Standard Recording Code for the recording.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsrcCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsrcCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-isrc-code",
    shellClassName: "lander-semantic--schema-property-isrc-code",
    title: "isrcCode",
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

(SchemaPropertyIsrcCode as typeof SchemaPropertyIsrcCode & { toStructuredData: (props: SchemaPropertyIsrcCodeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
