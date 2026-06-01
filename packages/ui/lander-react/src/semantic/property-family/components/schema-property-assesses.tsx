import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssessesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssesses({ value, description = "The item being described is intended to assess the competency or learning outcome defined by the referenced term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssessesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssessesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-assesses",
    shellClassName: "lander-semantic--schema-property-assesses",
    title: "assesses",
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
