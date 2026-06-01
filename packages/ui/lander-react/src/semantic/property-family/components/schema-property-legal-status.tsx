import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalStatusProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLegalStatus({ value, description = "The drug or supplement's legal status, including any controlled substance schedules that apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLegalStatusProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-status",
    shellClassName: "lander-semantic--schema-property-legal-status",
    title: "legalStatus",
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
