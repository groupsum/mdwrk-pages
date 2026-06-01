import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedCompositionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludedComposition({ value, description = "Smaller compositions included in this work (e.g. a movement in a symphony).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludedCompositionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedCompositionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-composition",
    shellClassName: "lander-semantic--schema-property-included-composition",
    title: "includedComposition",
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
