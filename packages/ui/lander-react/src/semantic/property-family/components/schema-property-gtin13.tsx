import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGtin13Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGtin13({ value, description = "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGtin13Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.Gtin13PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-gtin13",
    shellClassName: "lander-semantic--schema-property-gtin13",
    title: "gtin13",
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
