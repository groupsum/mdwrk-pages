import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProgramPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProgramProps extends ProgramPropertyInput, GeneratedPropertyUiProps<ProgramPropertyInput> {}

export function SchemaPropertyProgram({ value: legacyValue, description = "The [MemberProgram](https://schema.org/MemberProgram) associated with a [ProgramMembership](https://schema.org/ProgramMembership).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProgramProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
