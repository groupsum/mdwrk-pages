import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedToPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedToProps extends RelatedToPropertyInput, GeneratedPropertyUiProps<RelatedToPropertyInput> {}

export function SchemaPropertyRelatedTo({ value: legacyValue, description = "The most generic familial relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedToProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRelatedTo as typeof SchemaPropertyRelatedTo & { toStructuredData: (props: SchemaPropertyRelatedToProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
