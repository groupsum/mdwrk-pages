import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyKnows({ value, description = "The most generic bi-directional social/work relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyKnowsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KnowsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-knows",
    shellClassName: "lander-semantic--schema-property-knows",
    title: "knows",
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
