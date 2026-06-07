import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasPOSPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasPOSProps extends HasPOSPropertyInput, GeneratedPropertyUiProps<HasPOSPropertyInput> {}

export function SchemaPropertyHasPOS({ value: legacyValue, description = "Points-of-Sales operated by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasPOSProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasPOSPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-pos",
    shellClassName: "lander-semantic--schema-property-has-pos",
    title: "hasPOS",
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

(SchemaPropertyHasPOS as typeof SchemaPropertyHasPOS & { toStructuredData: (props: SchemaPropertyHasPOSProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
