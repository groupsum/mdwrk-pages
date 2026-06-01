import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedStructurePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedStructureProps extends RelatedStructurePropertyInput, GeneratedPropertyUiProps<RelatedStructurePropertyInput> {}

export function SchemaPropertyRelatedStructure({ value: legacyValue, description = "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedStructureProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedStructurePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-structure",
    shellClassName: "lander-semantic--schema-property-related-structure",
    title: "relatedStructure",
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
