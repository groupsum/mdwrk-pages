import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProcedurePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcedureProps extends ProcedurePropertyInput, GeneratedPropertyUiProps<ProcedurePropertyInput> {}

export function SchemaPropertyProcedure({ value: legacyValue, description = "A description of the procedure involved in setting up, using, and/or installing the device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProcedureProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProcedurePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-procedure",
    shellClassName: "lander-semantic--schema-property-procedure",
    title: "procedure",
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
