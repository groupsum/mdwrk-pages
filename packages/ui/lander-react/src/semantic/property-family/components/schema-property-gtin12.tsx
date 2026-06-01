import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Gtin12PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGtin12Props extends Gtin12PropertyInput, GeneratedPropertyUiProps<Gtin12PropertyInput> {}

export function SchemaPropertyGtin12({ value: legacyValue, description = "The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGtin12Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Gtin12PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-gtin12",
    shellClassName: "lander-semantic--schema-property-gtin12",
    title: "gtin12",
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
