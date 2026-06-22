import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublisherImprintPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublisherImprintProps extends PublisherImprintPropertyInput, GeneratedPropertyUiProps<PublisherImprintPropertyInput> {}

export function SchemaPropertyPublisherImprint({ value: legacyValue, description = "The publishing division which published the comic.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublisherImprintProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublisherImprintPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publisher-imprint",
    shellClassName: "lander-semantic--schema-property-publisher-imprint",
    title: "publisherImprint",
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

(SchemaPropertyPublisherImprint as typeof SchemaPropertyPublisherImprint & { toStructuredData: (props: SchemaPropertyPublisherImprintProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
