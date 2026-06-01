import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLearningResourceTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLearningResourceType({ value, description = "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLearningResourceTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LearningResourceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-learning-resource-type",
    shellClassName: "lander-semantic--schema-property-learning-resource-type",
    title: "learningResourceType",
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
