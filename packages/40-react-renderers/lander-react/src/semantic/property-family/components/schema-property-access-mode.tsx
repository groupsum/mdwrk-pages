import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessModePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessModeProps extends AccessModePropertyInput, GeneratedPropertyUiProps<AccessModePropertyInput> {}

export function SchemaPropertyAccessMode({ value: legacyValue, description = "The human sensory perceptual system or cognitive faculty through which a person may process or perceive the intellectual content of a resource, not including any adaptations of the content (e.g., text alternatives for images). Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessModeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessModePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-access-mode",
    shellClassName: "lander-semantic--schema-property-access-mode",
    title: "accessMode",
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

(SchemaPropertyAccessMode as typeof SchemaPropertyAccessMode & { toStructuredData: (props: SchemaPropertyAccessModeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
