import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServiceAudiencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceAudienceProps extends ServiceAudiencePropertyInput, GeneratedPropertyUiProps<ServiceAudiencePropertyInput> {}

export function SchemaPropertyServiceAudience({ value: legacyValue, description = "The audience eligible for this service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServiceAudienceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceAudiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-audience",
    shellClassName: "lander-semantic--schema-property-service-audience",
    title: "serviceAudience",
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
