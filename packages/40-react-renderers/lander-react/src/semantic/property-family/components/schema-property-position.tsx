import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PositionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPositionProps extends PositionPropertyInput, GeneratedPropertyUiProps<PositionPropertyInput> {}

export function SchemaPropertyPosition({ value: legacyValue, description = "The position of an item in a series or sequence of items.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPositionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PositionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-position",
    shellClassName: "lander-semantic--schema-property-position",
    title: "position",
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

(SchemaPropertyPosition as typeof SchemaPropertyPosition & { toStructuredData: (props: SchemaPropertyPositionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
