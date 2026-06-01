import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActor({ value, description = "An actor (individual or a group), e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActorProps) {
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
