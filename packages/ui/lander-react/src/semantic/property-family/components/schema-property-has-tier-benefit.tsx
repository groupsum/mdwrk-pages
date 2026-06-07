import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasTierBenefitPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasTierBenefitProps extends HasTierBenefitPropertyInput, GeneratedPropertyUiProps<HasTierBenefitPropertyInput> {}

export function SchemaPropertyHasTierBenefit({ value: legacyValue, description = "A member benefit for a particular tier of a loyalty program.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasTierBenefitProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyHasTierBenefit as typeof SchemaPropertyHasTierBenefit & { toStructuredData: (props: SchemaPropertyHasTierBenefitProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
