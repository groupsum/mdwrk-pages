import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProcedureProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProcedure({ value, description = "A description of the procedure involved in setting up, using, and/or installing the device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProcedureProps) {
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
