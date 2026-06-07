import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ConnectedToPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyConnectedToProps extends ConnectedToPropertyInput, GeneratedPropertyUiProps<ConnectedToPropertyInput> {}

export function SchemaPropertyConnectedTo({ value: legacyValue, description = "Other anatomical structures to which this structure is connected.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyConnectedToProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ConnectedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-connected-to",
    shellClassName: "lander-semantic--schema-property-connected-to",
    title: "connectedTo",
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

(SchemaPropertyConnectedTo as typeof SchemaPropertyConnectedTo & { toStructuredData: (props: SchemaPropertyConnectedToProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
