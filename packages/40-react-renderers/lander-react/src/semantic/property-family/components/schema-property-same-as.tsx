import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SameAsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySameAsProps extends SameAsPropertyInput, GeneratedPropertyUiProps<SameAsPropertyInput> {}

export function SchemaPropertySameAs({ value: legacyValue, description = "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySameAsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SameAsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-same-as",
    shellClassName: "lander-semantic--schema-property-same-as",
    title: "sameAs",
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

(SchemaPropertySameAs as typeof SchemaPropertySameAs & { toStructuredData: (props: SchemaPropertySameAsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
