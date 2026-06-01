import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CountryOfOriginPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCountryOfOriginProps extends CountryOfOriginPropertyInput, GeneratedPropertyUiProps<CountryOfOriginPropertyInput> {}

export function SchemaPropertyCountryOfOrigin({ value: legacyValue, description = "The country of origin of something, including products as well as creative  works such as movie and TV content.\n\nIn the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.\n\nIn the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCountryOfOriginProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CountryOfOriginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-country-of-origin",
    shellClassName: "lander-semantic--schema-property-country-of-origin",
    title: "countryOfOrigin",
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
