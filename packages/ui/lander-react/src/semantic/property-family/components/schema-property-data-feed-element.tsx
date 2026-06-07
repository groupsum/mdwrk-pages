import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DataFeedElementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDataFeedElementProps extends DataFeedElementPropertyInput, GeneratedPropertyUiProps<DataFeedElementPropertyInput> {}

export function SchemaPropertyDataFeedElement({ value: legacyValue, description = "An item within a data feed. Data feeds may have many elements.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDataFeedElementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDataFeedElement as typeof SchemaPropertyDataFeedElement & { toStructuredData: (props: SchemaPropertyDataFeedElementProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
