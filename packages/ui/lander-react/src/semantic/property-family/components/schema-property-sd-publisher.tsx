import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdPublisherProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySdPublisher({ value, description = "Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The\n[[sdPublisher]] property helps make such practices more explicit.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySdPublisherProps) {
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
