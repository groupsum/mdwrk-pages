import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyResponsibilitiesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyResponsibilities({ value, description = "Responsibilities associated with this role or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyResponsibilitiesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ResponsibilitiesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-responsibilities",
    shellClassName: "lander-semantic--schema-property-responsibilities",
    title: "responsibilities",
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
