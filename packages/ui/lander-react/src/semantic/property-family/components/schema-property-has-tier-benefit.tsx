import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasTierBenefitProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasTierBenefit({ value, description = "A member benefit for a particular tier of a loyalty program.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasTierBenefitProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasTierBenefitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-tier-benefit",
    shellClassName: "lander-semantic--schema-property-has-tier-benefit",
    title: "hasTierBenefit",
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
