import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceUrlProps extends ServiceUrlPropertyInput, GeneratedPropertyUiProps<ServiceUrlPropertyInput> {}

export function SchemaPropertyServiceUrl({ value: legacyValue, description = "The website to access the service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-url",
    shellClassName: "lander-semantic--schema-property-service-url",
    title: "serviceUrl",
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

(SchemaPropertyServiceUrl as typeof SchemaPropertyServiceUrl & { toStructuredData: (props: SchemaPropertyServiceUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
