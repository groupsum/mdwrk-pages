import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProductIDPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductIDProps extends ProductIDPropertyInput, GeneratedPropertyUiProps<ProductIDPropertyInput> {}

export function SchemaPropertyProductID({ value: legacyValue, description = "The product identifier, such as ISBN. For example: ``` meta itemprop=\"productID\" content=\"isbn:123-456-789\" ```.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProductIDProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-product-id",
    shellClassName: "lander-semantic--schema-property-product-id",
    title: "productID",
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

(SchemaPropertyProductID as typeof SchemaPropertyProductID & { toStructuredData: (props: SchemaPropertyProductIDProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
