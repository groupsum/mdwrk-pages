import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExpectsAcceptanceOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpectsAcceptanceOfProps extends ExpectsAcceptanceOfPropertyInput, GeneratedPropertyUiProps<ExpectsAcceptanceOfPropertyInput> {}

export function SchemaPropertyExpectsAcceptanceOf({ value: legacyValue, description = "An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExpectsAcceptanceOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpectsAcceptanceOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expects-acceptance-of",
    shellClassName: "lander-semantic--schema-property-expects-acceptance-of",
    title: "expectsAcceptanceOf",
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

(SchemaPropertyExpectsAcceptanceOf as typeof SchemaPropertyExpectsAcceptanceOf & { toStructuredData: (props: SchemaPropertyExpectsAcceptanceOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
