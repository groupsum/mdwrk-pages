import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParent({ value, description = "A parent of this person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent",
    shellClassName: "lander-semantic--schema-property-parent",
    title: "parent",
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
