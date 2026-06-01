import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreativeWorkStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCreativeWorkStatus({ value, description = "The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCreativeWorkStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreativeWorkStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-creative-work-status",
    shellClassName: "lander-semantic--schema-property-creative-work-status",
    title: "creativeWorkStatus",
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
