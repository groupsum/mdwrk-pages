import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasOfferCatalogProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasOfferCatalog({ value, description = "Indicates an OfferCatalog listing for this Organization, Person, or Service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasOfferCatalogProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasOfferCatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-offer-catalog",
    shellClassName: "lander-semantic--schema-property-has-offer-catalog",
    title: "hasOfferCatalog",
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
