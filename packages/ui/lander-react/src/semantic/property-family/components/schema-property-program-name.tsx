import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProgramNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProgramNameProps extends ProgramNamePropertyInput, GeneratedPropertyUiProps<ProgramNamePropertyInput> {}

export function SchemaPropertyProgramName({ value: legacyValue, description = "The program providing the membership. It is preferable to use [:program](https://schema.org/program) instead.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProgramNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyProgramName as typeof SchemaPropertyProgramName & { toStructuredData: (props: SchemaPropertyProgramNameProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
