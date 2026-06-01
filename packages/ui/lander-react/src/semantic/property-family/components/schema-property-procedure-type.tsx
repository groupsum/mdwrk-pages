import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcedureTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProcedureType({ value, description = "The type of procedure, for example Surgical, Noninvasive, or Percutaneous.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProcedureTypeProps) {
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
