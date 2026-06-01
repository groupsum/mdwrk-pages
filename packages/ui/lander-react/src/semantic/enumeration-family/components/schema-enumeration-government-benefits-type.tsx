import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface GovernmentBenefitsTypeProps extends GeneratedEnumerationProps<string> {}

export function GovernmentBenefitsType({ value, description = "GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: GovernmentBenefitsTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.GovernmentBenefitsTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-government-benefits-type",
    shellClassName: "lander-semantic--schema-enumeration-government-benefits-type",
    title: "GovernmentBenefitsType",
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
