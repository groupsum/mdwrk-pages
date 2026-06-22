import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProvidesServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProvidesServiceProps extends ProvidesServicePropertyInput, GeneratedPropertyUiProps<ProvidesServicePropertyInput> {}

export function SchemaPropertyProvidesService({ value: legacyValue, description = "The service provided by this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProvidesServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProvidesServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provides-service",
    shellClassName: "lander-semantic--schema-property-provides-service",
    title: "providesService",
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

(SchemaPropertyProvidesService as typeof SchemaPropertyProvidesService & { toStructuredData: (props: SchemaPropertyProvidesServiceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
