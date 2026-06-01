import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySellerProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySeller({ value, description = "An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySellerProps) {
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
