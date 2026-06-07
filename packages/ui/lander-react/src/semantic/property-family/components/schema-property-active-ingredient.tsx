import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActiveIngredientPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActiveIngredientProps extends ActiveIngredientPropertyInput, GeneratedPropertyUiProps<ActiveIngredientPropertyInput> {}

export function SchemaPropertyActiveIngredient({ value: legacyValue, description = "An active ingredient, typically chemical compounds and/or biologic substances.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActiveIngredientProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActiveIngredientPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-active-ingredient",
    shellClassName: "lander-semantic--schema-property-active-ingredient",
    title: "activeIngredient",
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

(SchemaPropertyActiveIngredient as typeof SchemaPropertyActiveIngredient & { toStructuredData: (props: SchemaPropertyActiveIngredientProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
