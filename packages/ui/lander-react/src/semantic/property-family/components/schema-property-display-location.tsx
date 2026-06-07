import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DisplayLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDisplayLocationProps extends DisplayLocationPropertyInput, GeneratedPropertyUiProps<DisplayLocationPropertyInput> {}

export function SchemaPropertyDisplayLocation({ value: legacyValue, description = "The location at which an item can be viewed or experienced in-person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDisplayLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DisplayLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-display-location",
    shellClassName: "lander-semantic--schema-property-display-location",
    title: "displayLocation",
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

(SchemaPropertyDisplayLocation as typeof SchemaPropertyDisplayLocation & { toStructuredData: (props: SchemaPropertyDisplayLocationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
