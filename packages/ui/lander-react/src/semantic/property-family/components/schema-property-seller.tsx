import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SellerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySellerProps extends SellerPropertyInput, GeneratedPropertyUiProps<SellerPropertyInput> {}

export function SchemaPropertySeller({ value: legacyValue, description = "An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySellerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SellerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-seller",
    shellClassName: "lander-semantic--schema-property-seller",
    title: "seller",
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
