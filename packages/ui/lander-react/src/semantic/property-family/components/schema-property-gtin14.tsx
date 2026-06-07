import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { Gtin14PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGtin14Props extends Gtin14PropertyInput, GeneratedPropertyUiProps<Gtin14PropertyInput> {}

export function SchemaPropertyGtin14({ value: legacyValue, description = "The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGtin14Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Gtin14PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-gtin14",
    shellClassName: "lander-semantic--schema-property-gtin14",
    title: "gtin14",
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

(SchemaPropertyGtin14 as typeof SchemaPropertyGtin14 & { toStructuredData: (props: SchemaPropertyGtin14Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
