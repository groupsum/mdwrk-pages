import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActorProps extends ActorPropertyInput, GeneratedPropertyUiProps<ActorPropertyInput> {}

export function SchemaPropertyActor({ value: legacyValue, description = "An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-actor",
    shellClassName: "lander-semantic--schema-property-actor",
    title: "actor",
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

(SchemaPropertyActor as typeof SchemaPropertyActor & { toStructuredData: (props: SchemaPropertyActorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
