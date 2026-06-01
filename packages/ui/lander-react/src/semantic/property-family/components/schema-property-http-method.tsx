import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHttpMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHttpMethod({ value, description = "An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHttpMethodProps) {
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
