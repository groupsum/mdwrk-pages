import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedInHealthInsurancePlanProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludedInHealthInsurancePlan({ value, description = "The insurance plans that cover this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludedInHealthInsurancePlanProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedInHealthInsurancePlanPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-in-health-insurance-plan",
    shellClassName: "lander-semantic--schema-property-included-in-health-insurance-plan",
    title: "includedInHealthInsurancePlan",
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
