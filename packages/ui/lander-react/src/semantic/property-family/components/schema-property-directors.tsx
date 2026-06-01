import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDirectorsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDirectors({ value, description = "A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDirectorsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DirectorsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-directors",
    shellClassName: "lander-semantic--schema-property-directors",
    title: "directors",
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
