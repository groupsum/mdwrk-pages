import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HttpMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHttpMethodProps extends HttpMethodPropertyInput, GeneratedPropertyUiProps<HttpMethodPropertyInput> {}

export function SchemaPropertyHttpMethod({ value: legacyValue, description = "An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHttpMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HttpMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-http-method",
    shellClassName: "lander-semantic--schema-property-http-method",
    title: "httpMethod",
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
