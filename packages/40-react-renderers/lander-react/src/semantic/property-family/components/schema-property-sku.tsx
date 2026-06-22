import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SkuPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySkuProps extends SkuPropertyInput, GeneratedPropertyUiProps<SkuPropertyInput> {}

export function SchemaPropertySku({ value: legacyValue, description = "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySkuProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SkuPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sku",
    shellClassName: "lander-semantic--schema-property-sku",
    title: "sku",
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

(SchemaPropertySku as typeof SchemaPropertySku & { toStructuredData: (props: SchemaPropertySkuProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
