import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessModeSufficientPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessModeSufficientProps extends AccessModeSufficientPropertyInput, GeneratedPropertyUiProps<AccessModeSufficientPropertyInput> {}

export function SchemaPropertyAccessModeSufficient({ value: legacyValue, description = "A list of single or combined access modes that are sufficient to understand all the intellectual content of a resource, including any adaptations. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessModeSufficientProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessModeSufficientPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-access-mode-sufficient",
    shellClassName: "lander-semantic--schema-property-access-mode-sufficient",
    title: "accessModeSufficient",
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
