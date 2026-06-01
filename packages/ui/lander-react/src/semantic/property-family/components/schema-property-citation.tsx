import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CitationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCitationProps extends CitationPropertyInput, GeneratedPropertyUiProps<CitationPropertyInput> {}

export function SchemaPropertyCitation({ value: legacyValue, description = "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCitationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CitationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-citation",
    shellClassName: "lander-semantic--schema-property-citation",
    title: "citation",
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
