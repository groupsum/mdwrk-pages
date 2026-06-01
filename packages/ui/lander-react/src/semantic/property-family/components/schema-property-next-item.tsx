import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNextItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNextItem({ value, description = "A link to the ListItem that follows the current one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNextItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NextItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-next-item",
    shellClassName: "lander-semantic--schema-property-next-item",
    title: "nextItem",
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
