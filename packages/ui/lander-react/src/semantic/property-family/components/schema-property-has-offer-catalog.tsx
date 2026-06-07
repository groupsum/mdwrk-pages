import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasOfferCatalogPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasOfferCatalogProps extends HasOfferCatalogPropertyInput, GeneratedPropertyUiProps<HasOfferCatalogPropertyInput> {}

export function SchemaPropertyHasOfferCatalog({ value: legacyValue, description = "Indicates an OfferCatalog listing for this Organization, Person, or Service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasOfferCatalogProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyHasOfferCatalog as typeof SchemaPropertyHasOfferCatalog & { toStructuredData: (props: SchemaPropertyHasOfferCatalogProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
