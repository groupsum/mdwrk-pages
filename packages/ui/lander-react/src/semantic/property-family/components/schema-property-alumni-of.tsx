import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlumniOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlumniOf({ value, description = "An organization that the person is an alumni of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlumniOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlumniOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alumni-of",
    shellClassName: "lander-semantic--schema-property-alumni-of",
    title: "alumniOf",
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
