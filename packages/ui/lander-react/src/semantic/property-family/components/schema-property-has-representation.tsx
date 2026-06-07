import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasRepresentationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasRepresentationProps extends HasRepresentationPropertyInput, GeneratedPropertyUiProps<HasRepresentationPropertyInput> {}

export function SchemaPropertyHasRepresentation({ value: legacyValue, description = "A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasRepresentationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasRepresentationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-representation",
    shellClassName: "lander-semantic--schema-property-has-representation",
    title: "hasRepresentation",
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

(SchemaPropertyHasRepresentation as typeof SchemaPropertyHasRepresentation & { toStructuredData: (props: SchemaPropertyHasRepresentationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
