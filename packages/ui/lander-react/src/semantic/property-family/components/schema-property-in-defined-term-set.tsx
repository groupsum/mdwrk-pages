import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInDefinedTermSetProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInDefinedTermSet({ value, description = "A [[DefinedTermSet]] that contains this term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInDefinedTermSetProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InDefinedTermSetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-defined-term-set",
    shellClassName: "lander-semantic--schema-property-in-defined-term-set",
    title: "inDefinedTermSet",
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
