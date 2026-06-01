import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProgramProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProgram({ value, description = "The [MemberProgram](https://schema.org/MemberProgram) associated with a [ProgramMembership](https://schema.org/ProgramMembership).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProgramProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProgramPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-program",
    shellClassName: "lander-semantic--schema-property-program",
    title: "program",
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
