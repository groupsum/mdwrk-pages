import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublisherImprintProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublisherImprint({ value, description = "The publishing division which published the comic.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublisherImprintProps) {
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
