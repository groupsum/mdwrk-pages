import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CarbohydrateContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCarbohydrateContentProps extends CarbohydrateContentPropertyInput, GeneratedPropertyUiProps<CarbohydrateContentPropertyInput> {}

export function SchemaPropertyCarbohydrateContent({ value: legacyValue, description = "The number of grams of carbohydrates.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCarbohydrateContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CarbohydrateContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-carbohydrate-content",
    shellClassName: "lander-semantic--schema-property-carbohydrate-content",
    title: "carbohydrateContent",
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

(SchemaPropertyCarbohydrateContent as typeof SchemaPropertyCarbohydrateContent & { toStructuredData: (props: SchemaPropertyCarbohydrateContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
