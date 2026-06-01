import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EducationalAlignmentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalAlignmentProps extends EducationalAlignmentPropertyInput, GeneratedPropertyUiProps<EducationalAlignmentPropertyInput> {}

export function SchemaPropertyEducationalAlignment({ value: legacyValue, description = "An alignment to an established educational framework.\n\nThis property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEducationalAlignmentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalAlignmentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-alignment",
    shellClassName: "lander-semantic--schema-property-educational-alignment",
    title: "educationalAlignment",
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
