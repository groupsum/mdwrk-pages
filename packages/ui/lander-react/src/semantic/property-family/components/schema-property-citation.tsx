import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCitationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCitation({ value, description = "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCitationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CitationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-citation",
    shellClassName: "lander-semantic--schema-property-citation",
    title: "citation",
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
