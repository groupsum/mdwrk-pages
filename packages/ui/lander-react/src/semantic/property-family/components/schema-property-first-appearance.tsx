import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FirstAppearancePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFirstAppearanceProps extends FirstAppearancePropertyInput, GeneratedPropertyUiProps<FirstAppearancePropertyInput> {}

export function SchemaPropertyFirstAppearance({ value: legacyValue, description = "Indicates the first known occurrence of a [[Claim]] in some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFirstAppearanceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FirstAppearancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-first-appearance",
    shellClassName: "lander-semantic--schema-property-first-appearance",
    title: "firstAppearance",
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

(SchemaPropertyFirstAppearance as typeof SchemaPropertyFirstAppearance & { toStructuredData: (props: SchemaPropertyFirstAppearanceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
