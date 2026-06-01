import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UrlTemplatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUrlTemplateProps extends UrlTemplatePropertyInput, GeneratedPropertyUiProps<UrlTemplatePropertyInput> {}

export function SchemaPropertyUrlTemplate({ value: legacyValue, description = "An url template (RFC6570) that will be used to construct the target of the execution of the action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUrlTemplateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UrlTemplatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-url-template",
    shellClassName: "lander-semantic--schema-property-url-template",
    title: "urlTemplate",
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
