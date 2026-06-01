import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedAnatomyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedAnatomy({ value, description = "Anatomical systems or structures that relate to the superficial anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedAnatomyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedAnatomyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-anatomy",
    shellClassName: "lander-semantic--schema-property-related-anatomy",
    title: "relatedAnatomy",
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
