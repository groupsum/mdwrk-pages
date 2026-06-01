import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNsnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNsn({ value, description = "Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNsnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NsnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-nsn",
    shellClassName: "lander-semantic--schema-property-nsn",
    title: "nsn",
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
