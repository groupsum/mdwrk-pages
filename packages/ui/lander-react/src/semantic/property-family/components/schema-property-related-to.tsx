import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedToProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedTo({ value, description = "The most generic familial relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedToProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-to",
    shellClassName: "lander-semantic--schema-property-related-to",
    title: "relatedTo",
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
