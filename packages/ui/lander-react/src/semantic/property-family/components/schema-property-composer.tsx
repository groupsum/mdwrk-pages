import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyComposerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyComposer({ value, description = "The person or organization who wrote a composition, or who is the composer of a work performed at some event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyComposerProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ComposerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-composer",
    shellClassName: "lander-semantic--schema-property-composer",
    title: "composer",
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
