import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedConditionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedConditionProps extends RelatedConditionPropertyInput, GeneratedPropertyUiProps<RelatedConditionPropertyInput> {}

export function SchemaPropertyRelatedCondition({ value: legacyValue, description = "A medical condition associated with this anatomy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedConditionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRelatedCondition as typeof SchemaPropertyRelatedCondition & { toStructuredData: (props: SchemaPropertyRelatedConditionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
