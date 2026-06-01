import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGtin14Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGtin14({ value, description = "The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGtin14Props) {
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
