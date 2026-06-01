import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProgramNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProgramName({ value, description = "The program providing the membership. It is preferable to use [:program](https://schema.org/program) instead.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProgramNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProgramNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-program-name",
    shellClassName: "lander-semantic--schema-property-program-name",
    title: "programName",
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
