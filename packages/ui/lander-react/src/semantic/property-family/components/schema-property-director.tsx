import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDirectorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDirector({ value, description = "A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDirectorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DirectorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-director",
    shellClassName: "lander-semantic--schema-property-director",
    title: "director",
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
