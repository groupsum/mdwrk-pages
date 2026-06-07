import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DeathPlacePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeathPlaceProps extends DeathPlacePropertyInput, GeneratedPropertyUiProps<DeathPlacePropertyInput> {}

export function SchemaPropertyDeathPlace({ value: legacyValue, description = "The place where the person died.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDeathPlaceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DeathPlacePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-death-place",
    shellClassName: "lander-semantic--schema-property-death-place",
    title: "deathPlace",
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

(SchemaPropertyDeathPlace as typeof SchemaPropertyDeathPlace & { toStructuredData: (props: SchemaPropertyDeathPlaceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
