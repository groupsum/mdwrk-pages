import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IswcCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIswcCodeProps extends IswcCodePropertyInput, GeneratedPropertyUiProps<IswcCodePropertyInput> {}

export function SchemaPropertyIswcCode({ value: legacyValue, description = "The International Standard Musical Work Code for the composition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIswcCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IswcCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-iswc-code",
    shellClassName: "lander-semantic--schema-property-iswc-code",
    title: "iswcCode",
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
