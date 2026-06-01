import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreatorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCreator({ value, description = "The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCreatorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreatorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-creator",
    shellClassName: "lander-semantic--schema-property-creator",
    title: "creator",
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
