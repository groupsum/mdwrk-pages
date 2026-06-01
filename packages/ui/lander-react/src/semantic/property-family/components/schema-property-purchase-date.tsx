import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPurchaseDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPurchaseDate({ value, description = "The date the item, e.g. vehicle, was purchased by the current owner.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPurchaseDateProps) {
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
