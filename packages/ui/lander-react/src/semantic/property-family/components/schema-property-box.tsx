import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BoxPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBoxProps extends BoxPropertyInput, GeneratedPropertyUiProps<BoxPropertyInput> {}

export function SchemaPropertyBox({ value: legacyValue, description = "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBoxProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BoxPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-box",
    shellClassName: "lander-semantic--schema-property-box",
    title: "box",
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

(SchemaPropertyBox as typeof SchemaPropertyBox & { toStructuredData: (props: SchemaPropertyBoxProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
