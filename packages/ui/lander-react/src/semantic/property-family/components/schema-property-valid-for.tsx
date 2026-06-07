import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValidForPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidForProps extends ValidForPropertyInput, GeneratedPropertyUiProps<ValidForPropertyInput> {}

export function SchemaPropertyValidFor({ value: legacyValue, description = "The duration of validity of a permit or similar thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValidForProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-for",
    shellClassName: "lander-semantic--schema-property-valid-for",
    title: "validFor",
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

(SchemaPropertyValidFor as typeof SchemaPropertyValidFor & { toStructuredData: (props: SchemaPropertyValidForProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
