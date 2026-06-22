import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PolygonPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPolygonProps extends PolygonPropertyInput, GeneratedPropertyUiProps<PolygonPropertyInput> {}

export function SchemaPropertyPolygon({ value: legacyValue, description = "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPolygonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PolygonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-polygon",
    shellClassName: "lander-semantic--schema-property-polygon",
    title: "polygon",
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

(SchemaPropertyPolygon as typeof SchemaPropertyPolygon & { toStructuredData: (props: SchemaPropertyPolygonProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
