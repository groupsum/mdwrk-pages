import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDataFeedElementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDataFeedElement({ value, description = "An item within a data feed. Data feeds may have many elements.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDataFeedElementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DataFeedElementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-data-feed-element",
    shellClassName: "lander-semantic--schema-property-data-feed-element",
    title: "dataFeedElement",
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
