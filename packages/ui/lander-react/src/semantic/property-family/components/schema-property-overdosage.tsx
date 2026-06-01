import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOverdosageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOverdosage({ value, description = "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOverdosageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OverdosagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-overdosage",
    shellClassName: "lander-semantic--schema-property-overdosage",
    title: "overdosage",
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
