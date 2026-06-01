import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PurchaseDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPurchaseDateProps extends PurchaseDatePropertyInput, GeneratedPropertyUiProps<PurchaseDatePropertyInput> {}

export function SchemaPropertyPurchaseDate({ value: legacyValue, description = "The date the item, e.g. vehicle, was purchased by the current owner.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPurchaseDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PurchaseDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-purchase-date",
    shellClassName: "lander-semantic--schema-property-purchase-date",
    title: "purchaseDate",
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
