import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySameAsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySameAs({ value, description = "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySameAsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SameAsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-same-as",
    shellClassName: "lander-semantic--schema-property-same-as",
    title: "sameAs",
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
