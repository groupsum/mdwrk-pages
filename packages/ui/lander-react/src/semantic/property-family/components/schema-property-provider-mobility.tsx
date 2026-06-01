import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProviderMobilityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProviderMobilityProps extends ProviderMobilityPropertyInput, GeneratedPropertyUiProps<ProviderMobilityPropertyInput> {}

export function SchemaPropertyProviderMobility({ value: legacyValue, description = "Indicates the mobility of a provided service (e.g. 'static', 'dynamic').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProviderMobilityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProviderMobilityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provider-mobility",
    shellClassName: "lander-semantic--schema-property-provider-mobility",
    title: "providerMobility",
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
