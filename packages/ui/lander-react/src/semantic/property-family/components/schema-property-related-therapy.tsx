import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedTherapyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedTherapy({ value, description = "A medical therapy related to this anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedTherapyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedTherapyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-therapy",
    shellClassName: "lander-semantic--schema-property-related-therapy",
    title: "relatedTherapy",
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
