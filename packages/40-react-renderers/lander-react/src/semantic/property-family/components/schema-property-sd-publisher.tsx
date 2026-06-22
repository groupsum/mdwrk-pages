import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SdPublisherPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdPublisherProps extends SdPublisherPropertyInput, GeneratedPropertyUiProps<SdPublisherPropertyInput> {}

export function SchemaPropertySdPublisher({ value: legacyValue, description = "Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The\n[[sdPublisher]] property helps make such practices more explicit.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySdPublisherProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SdPublisherPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sd-publisher",
    shellClassName: "lander-semantic--schema-property-sd-publisher",
    title: "sdPublisher",
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

(SchemaPropertySdPublisher as typeof SchemaPropertySdPublisher & { toStructuredData: (props: SchemaPropertySdPublisherProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
