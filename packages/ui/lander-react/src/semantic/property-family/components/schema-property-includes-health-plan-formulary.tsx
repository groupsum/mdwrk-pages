import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesHealthPlanFormularyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludesHealthPlanFormulary({ value, description = "Formularies covered by this plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludesHealthPlanFormularyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludesHealthPlanFormularyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-includes-health-plan-formulary",
    shellClassName: "lander-semantic--schema-property-includes-health-plan-formulary",
    title: "includesHealthPlanFormulary",
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
