import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIssnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIssn({ value, description = "The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIssnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IssnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-issn",
    shellClassName: "lander-semantic--schema-property-issn",
    title: "issn",
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
