import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LearningResourceTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLearningResourceTypeProps extends LearningResourceTypePropertyInput, GeneratedPropertyUiProps<LearningResourceTypePropertyInput> {}

export function SchemaPropertyLearningResourceType({ value: legacyValue, description = "The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLearningResourceTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyLearningResourceType as typeof SchemaPropertyLearningResourceType & { toStructuredData: (props: SchemaPropertyLearningResourceTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
