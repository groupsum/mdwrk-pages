import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateDeletedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDateDeleted({ value, description = "The datetime the item was removed from the DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDateDeletedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateDeletedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-deleted",
    shellClassName: "lander-semantic--schema-property-date-deleted",
    title: "dateDeleted",
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
