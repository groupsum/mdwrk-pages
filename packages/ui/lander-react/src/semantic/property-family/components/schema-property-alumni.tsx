import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlumniProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlumni({ value, description = "Alumni of an organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlumniProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlumniPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alumni",
    shellClassName: "lander-semantic--schema-property-alumni",
    title: "alumni",
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
