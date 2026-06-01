import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface TierBenefitEnumerationProps extends GeneratedEnumerationProps<string> {}

export function TierBenefitEnumeration({ value, description = "An enumeration of possible benefits as part of a loyalty (members) program.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: TierBenefitEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.TierBenefitEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-tier-benefit-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-tier-benefit-enumeration",
    title: "TierBenefitEnumeration",
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
