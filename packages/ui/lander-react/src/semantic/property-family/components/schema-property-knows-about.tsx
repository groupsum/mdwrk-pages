import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsAboutProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyKnowsAbout({ value, description = "Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyKnowsAboutProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KnowsAboutPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-knows-about",
    shellClassName: "lander-semantic--schema-property-knows-about",
    title: "knowsAbout",
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
