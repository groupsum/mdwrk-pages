import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProductSupportedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductSupportedProps extends ProductSupportedPropertyInput, GeneratedPropertyUiProps<ProductSupportedPropertyInput> {}

export function SchemaPropertyProductSupported({ value: legacyValue, description = "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProductSupportedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductSupportedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-product-supported",
    shellClassName: "lander-semantic--schema-property-product-supported",
    title: "productSupported",
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

(SchemaPropertyProductSupported as typeof SchemaPropertyProductSupported & { toStructuredData: (props: SchemaPropertyProductSupportedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
