import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTermCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTermCode({ value, description = "A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTermCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TermCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-term-code",
    shellClassName: "lander-semantic--schema-property-term-code",
    title: "termCode",
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
