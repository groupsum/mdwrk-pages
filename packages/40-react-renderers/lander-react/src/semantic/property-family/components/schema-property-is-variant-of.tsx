import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsVariantOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsVariantOfProps extends IsVariantOfPropertyInput, GeneratedPropertyUiProps<IsVariantOfPropertyInput> {}

export function SchemaPropertyIsVariantOf({ value: legacyValue, description = "Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsVariantOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsVariantOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-variant-of",
    shellClassName: "lander-semantic--schema-property-is-variant-of",
    title: "isVariantOf",
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

(SchemaPropertyIsVariantOf as typeof SchemaPropertyIsVariantOf & { toStructuredData: (props: SchemaPropertyIsVariantOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
