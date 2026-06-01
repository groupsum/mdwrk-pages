import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateModifiedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDateModified({ value, description = "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDateModifiedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateModifiedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-modified",
    shellClassName: "lander-semantic--schema-property-date-modified",
    title: "dateModified",
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
