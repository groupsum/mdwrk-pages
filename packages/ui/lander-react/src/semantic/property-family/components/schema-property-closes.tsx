import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ClosesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyClosesProps extends ClosesPropertyInput, GeneratedPropertyUiProps<ClosesPropertyInput> {}

export function SchemaPropertyCloses({ value: legacyValue, description = "The closing hour of the place or service on the given day(s) of the week.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyClosesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ClosesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-closes",
    shellClassName: "lander-semantic--schema-property-closes",
    title: "closes",
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

(SchemaPropertyCloses as typeof SchemaPropertyCloses & { toStructuredData: (props: SchemaPropertyClosesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
