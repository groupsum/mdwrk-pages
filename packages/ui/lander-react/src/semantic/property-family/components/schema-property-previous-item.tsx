import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PreviousItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreviousItemProps extends PreviousItemPropertyInput, GeneratedPropertyUiProps<PreviousItemPropertyInput> {}

export function SchemaPropertyPreviousItem({ value: legacyValue, description = "A link to the ListItem that precedes the current one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPreviousItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreviousItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-previous-item",
    shellClassName: "lander-semantic--schema-property-previous-item",
    title: "previousItem",
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

(SchemaPropertyPreviousItem as typeof SchemaPropertyPreviousItem & { toStructuredData: (props: SchemaPropertyPreviousItemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
