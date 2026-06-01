import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPhysiologicalBenefitsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPhysiologicalBenefits({ value, description = "Specific physiologic benefits associated to the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPhysiologicalBenefitsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PhysiologicalBenefitsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-physiological-benefits",
    shellClassName: "lander-semantic--schema-property-physiological-benefits",
    title: "physiologicalBenefits",
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
