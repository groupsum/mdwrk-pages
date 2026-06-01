import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTeachesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTeaches({ value, description = "The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTeachesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TeachesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-teaches",
    shellClassName: "lander-semantic--schema-property-teaches",
    title: "teaches",
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
