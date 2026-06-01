import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLeiCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLeiCode({ value, description = "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLeiCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LeiCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lei-code",
    shellClassName: "lander-semantic--schema-property-lei-code",
    title: "leiCode",
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
