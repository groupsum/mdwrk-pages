import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProducerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProducer({ value, description = "The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProducerProps) {
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
