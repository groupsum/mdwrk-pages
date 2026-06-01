import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublicationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublication({ value, description = "A publication event associated with the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublicationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publication",
    shellClassName: "lander-semantic--schema-property-publication",
    title: "publication",
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
