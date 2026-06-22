import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasPartPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasPartProps extends HasPartPropertyInput, GeneratedPropertyUiProps<HasPartPropertyInput> {}

export function SchemaPropertyHasPart({ value: legacyValue, description = "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasPartProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasPartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-part",
    shellClassName: "lander-semantic--schema-property-has-part",
    title: "hasPart",
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

(SchemaPropertyHasPart as typeof SchemaPropertyHasPart & { toStructuredData: (props: SchemaPropertyHasPartProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
