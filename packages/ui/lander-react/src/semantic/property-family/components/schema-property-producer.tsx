import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProducerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProducerProps extends ProducerPropertyInput, GeneratedPropertyUiProps<ProducerPropertyInput> {}

export function SchemaPropertyProducer({ value: legacyValue, description = "The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProducerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProducerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-producer",
    shellClassName: "lander-semantic--schema-property-producer",
    title: "producer",
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
