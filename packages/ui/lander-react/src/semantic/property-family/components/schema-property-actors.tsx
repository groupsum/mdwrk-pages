import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActorsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyActors({ value, description = "An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyActorsProps) {
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
