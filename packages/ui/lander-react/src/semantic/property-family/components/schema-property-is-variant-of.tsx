import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsVariantOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsVariantOf({ value, description = "Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsVariantOfProps) {
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
