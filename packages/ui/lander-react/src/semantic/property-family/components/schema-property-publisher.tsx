import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublisherPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublisherProps extends PublisherPropertyInput, GeneratedPropertyUiProps<PublisherPropertyInput> {}

export function SchemaPropertyPublisher({ value: legacyValue, description = "The publisher of the article in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublisherProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublisherPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publisher",
    shellClassName: "lander-semantic--schema-property-publisher",
    title: "publisher",
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

(SchemaPropertyPublisher as typeof SchemaPropertyPublisher & { toStructuredData: (props: SchemaPropertyPublisherProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
