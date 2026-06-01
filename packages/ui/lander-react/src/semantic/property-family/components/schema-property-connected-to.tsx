import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyConnectedToProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyConnectedTo({ value, description = "Other anatomical structures to which this structure is connected.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyConnectedToProps) {
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
