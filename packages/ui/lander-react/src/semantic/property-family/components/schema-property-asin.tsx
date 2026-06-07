import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AsinPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAsinProps extends AsinPropertyInput, GeneratedPropertyUiProps<AsinPropertyInput> {}

export function SchemaPropertyAsin({ value: legacyValue, description = "An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).\n\nNote also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.\nASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAsinProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AsinPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-asin",
    shellClassName: "lander-semantic--schema-property-asin",
    title: "asin",
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

(SchemaPropertyAsin as typeof SchemaPropertyAsin & { toStructuredData: (props: SchemaPropertyAsinProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
