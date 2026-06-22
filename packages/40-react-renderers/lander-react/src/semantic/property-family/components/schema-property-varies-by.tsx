import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { VariesByPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVariesByProps extends VariesByPropertyInput, GeneratedPropertyUiProps<VariesByPropertyInput> {}

export function SchemaPropertyVariesBy({ value: legacyValue, description = "Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. \"color\"; terms defined elsewhere can be referenced with their URIs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyVariesByProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VariesByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-varies-by",
    shellClassName: "lander-semantic--schema-property-varies-by",
    title: "variesBy",
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

(SchemaPropertyVariesBy as typeof SchemaPropertyVariesBy & { toStructuredData: (props: SchemaPropertyVariesByProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
