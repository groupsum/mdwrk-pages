import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedConditionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedCondition({ value, description = "A medical condition associated with this anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedConditionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedConditionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-condition",
    shellClassName: "lander-semantic--schema-property-related-condition",
    title: "relatedCondition",
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
