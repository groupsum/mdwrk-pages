import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActorsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActorsProps extends ActorsPropertyInput, GeneratedPropertyUiProps<ActorsPropertyInput> {}

export function SchemaPropertyActors({ value: legacyValue, description = "An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActorsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActorsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-actors",
    shellClassName: "lander-semantic--schema-property-actors",
    title: "actors",
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

(SchemaPropertyActors as typeof SchemaPropertyActors & { toStructuredData: (props: SchemaPropertyActorsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
