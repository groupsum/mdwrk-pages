import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CirclePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCircleProps extends CirclePropertyInput, GeneratedPropertyUiProps<CirclePropertyInput> {}

export function SchemaPropertyCircle({ value: legacyValue, description = "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCircleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CirclePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-circle",
    shellClassName: "lander-semantic--schema-property-circle",
    title: "circle",
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

(SchemaPropertyCircle as typeof SchemaPropertyCircle & { toStructuredData: (props: SchemaPropertyCircleProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
