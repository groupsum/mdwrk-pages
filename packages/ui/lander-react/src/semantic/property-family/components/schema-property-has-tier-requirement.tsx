import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasTierRequirementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasTierRequirement({ value, description = "A requirement for a user to join a membership tier, for example: a CreditCard if the tier requires sign up for a credit card, A UnitPriceSpecification if the user is required to pay a (periodic) fee, or a MonetaryAmount if the user needs to spend a minimum amount to join the tier. If a tier is free to join then this property does not need to be specified.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasTierRequirementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasTierRequirementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-tier-requirement",
    shellClassName: "lander-semantic--schema-property-has-tier-requirement",
    title: "hasTierRequirement",
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
