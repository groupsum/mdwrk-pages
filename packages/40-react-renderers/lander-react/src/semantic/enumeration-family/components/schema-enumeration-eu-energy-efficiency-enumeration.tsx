import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface EUEnergyEfficiencyEnumerationProps extends GeneratedEnumerationProps<string> {}

export function EUEnergyEfficiencyEnumeration({ value, description = "Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: EUEnergyEfficiencyEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.EUEnergyEfficiencyEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-eu-energy-efficiency-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-eu-energy-efficiency-enumeration",
    title: "EUEnergyEfficiencyEnumeration",
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

(EUEnergyEfficiencyEnumeration as typeof EUEnergyEfficiencyEnumeration & { toStructuredData: (props: EUEnergyEfficiencyEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
