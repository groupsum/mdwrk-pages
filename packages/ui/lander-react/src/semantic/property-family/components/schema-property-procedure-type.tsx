import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProcedureTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcedureTypeProps extends ProcedureTypePropertyInput, GeneratedPropertyUiProps<ProcedureTypePropertyInput> {}

export function SchemaPropertyProcedureType({ value: legacyValue, description = "The type of procedure, for example Surgical, Noninvasive, or Percutaneous.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProcedureTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProcedureTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-procedure-type",
    shellClassName: "lander-semantic--schema-property-procedure-type",
    title: "procedureType",
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
