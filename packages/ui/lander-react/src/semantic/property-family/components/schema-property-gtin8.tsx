import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGtin8Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGtin8({ value, description = "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGtin8Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Gtin8PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-gtin8",
    shellClassName: "lander-semantic--schema-property-gtin8",
    title: "gtin8",
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
