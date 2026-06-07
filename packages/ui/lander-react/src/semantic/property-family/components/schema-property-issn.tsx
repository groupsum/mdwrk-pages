import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IssnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIssnProps extends IssnPropertyInput, GeneratedPropertyUiProps<IssnPropertyInput> {}

export function SchemaPropertyIssn({ value: legacyValue, description = "The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIssnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IssnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-issn",
    shellClassName: "lander-semantic--schema-property-issn",
    title: "issn",
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

(SchemaPropertyIssn as typeof SchemaPropertyIssn & { toStructuredData: (props: SchemaPropertyIssnProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
