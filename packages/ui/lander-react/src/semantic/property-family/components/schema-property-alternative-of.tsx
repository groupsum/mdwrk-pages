import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlternativeOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternativeOfProps extends AlternativeOfPropertyInput, GeneratedPropertyUiProps<AlternativeOfPropertyInput> {}

export function SchemaPropertyAlternativeOf({ value: legacyValue, description = "Another gene which is a variation of this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlternativeOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternativeOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternative-of",
    shellClassName: "lander-semantic--schema-property-alternative-of",
    title: "alternativeOf",
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

(SchemaPropertyAlternativeOf as typeof SchemaPropertyAlternativeOf & { toStructuredData: (props: SchemaPropertyAlternativeOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
