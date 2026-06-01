import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PlayerTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPlayerTypeProps extends PlayerTypePropertyInput, GeneratedPropertyUiProps<PlayerTypePropertyInput> {}

export function SchemaPropertyPlayerType({ value: legacyValue, description = "Player type required&#x2014;for example, Flash or Silverlight.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPlayerTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PlayerTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-player-type",
    shellClassName: "lander-semantic--schema-property-player-type",
    title: "playerType",
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
