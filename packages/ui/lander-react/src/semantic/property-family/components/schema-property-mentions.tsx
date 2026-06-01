import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMentionsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMentions({ value, description = "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMentionsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MentionsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-mentions",
    shellClassName: "lander-semantic--schema-property-mentions",
    title: "mentions",
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
