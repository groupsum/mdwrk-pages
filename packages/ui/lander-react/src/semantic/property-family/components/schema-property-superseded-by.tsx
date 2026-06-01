import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySupersededByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySupersededBy({ value, description = "Relates a term (i.e. a property, class or enumeration) to one that supersedes it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySupersededByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SupersededByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-superseded-by",
    shellClassName: "lander-semantic--schema-property-superseded-by",
    title: "supersededBy",
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
