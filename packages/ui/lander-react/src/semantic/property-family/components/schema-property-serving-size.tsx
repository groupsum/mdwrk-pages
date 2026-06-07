import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ServingSizePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServingSizeProps extends ServingSizePropertyInput, GeneratedPropertyUiProps<ServingSizePropertyInput> {}

export function SchemaPropertyServingSize({ value: legacyValue, description = "The serving size, in terms of the number of volume or mass.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyServingSizeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServingSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-serving-size",
    shellClassName: "lander-semantic--schema-property-serving-size",
    title: "servingSize",
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

(SchemaPropertyServingSize as typeof SchemaPropertyServingSize & { toStructuredData: (props: SchemaPropertyServingSizeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
