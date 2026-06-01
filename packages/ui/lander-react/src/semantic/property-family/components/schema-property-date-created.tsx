import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateCreatedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDateCreated({ value, description = "The date on which the CreativeWork was created or the item was added to a DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDateCreatedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateCreatedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-created",
    shellClassName: "lander-semantic--schema-property-date-created",
    title: "dateCreated",
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
