import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubStructureProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubStructure({ value, description = "Component (sub-)structure(s) that comprise this anatomical structure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubStructureProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubStructurePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-structure",
    shellClassName: "lander-semantic--schema-property-sub-structure",
    title: "subStructure",
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
