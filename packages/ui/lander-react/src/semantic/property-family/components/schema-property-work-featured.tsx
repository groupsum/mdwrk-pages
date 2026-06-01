import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkFeaturedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorkFeatured({ value, description = "A work featured in some event, e.g. exhibited in an ExhibitionEvent.\n       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorkFeaturedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkFeaturedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-featured",
    shellClassName: "lander-semantic--schema-property-work-featured",
    title: "workFeatured",
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
