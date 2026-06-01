import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCodeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCode({ value, description = "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCodeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-code",
    shellClassName: "lander-semantic--schema-property-code",
    title: "code",
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
