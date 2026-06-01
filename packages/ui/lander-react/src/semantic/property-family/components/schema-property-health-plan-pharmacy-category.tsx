import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHealthPlanPharmacyCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHealthPlanPharmacyCategory({ value, description = "The category or type of pharmacy associated with this cost sharing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHealthPlanPharmacyCategoryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HealthPlanPharmacyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-health-plan-pharmacy-category",
    shellClassName: "lander-semantic--schema-property-health-plan-pharmacy-category",
    title: "healthPlanPharmacyCategory",
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
