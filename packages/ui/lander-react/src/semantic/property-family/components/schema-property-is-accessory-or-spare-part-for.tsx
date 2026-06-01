import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAccessoryOrSparePartForProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsAccessoryOrSparePartFor({ value, description = "A pointer to another product (or multiple products) for which this product is an accessory or spare part.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsAccessoryOrSparePartForProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAccessoryOrSparePartForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-accessory-or-spare-part-for",
    shellClassName: "lander-semantic--schema-property-is-accessory-or-spare-part-for",
    title: "isAccessoryOrSparePartFor",
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
