import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySiblingsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySiblings({ value, description = "A sibling of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySiblingsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SiblingsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-siblings",
    shellClassName: "lander-semantic--schema-property-siblings",
    title: "siblings",
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
