import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInStoreReturnsOfferedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInStoreReturnsOffered({ value, description = "Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.)", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInStoreReturnsOfferedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InStoreReturnsOfferedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-store-returns-offered",
    shellClassName: "lander-semantic--schema-property-in-store-returns-offered",
    title: "inStoreReturnsOffered",
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
