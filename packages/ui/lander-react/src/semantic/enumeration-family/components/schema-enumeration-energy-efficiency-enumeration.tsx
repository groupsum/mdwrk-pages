import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface EnergyEfficiencyEnumerationProps extends GeneratedEnumerationProps<string> {}

export function EnergyEfficiencyEnumeration({ value, description = "Enumerates energy efficiency levels (also known as \"classes\" or \"ratings\") and certifications that are part of several international energy efficiency standards.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: EnergyEfficiencyEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.EnergyEfficiencyEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-energy-efficiency-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-energy-efficiency-enumeration",
    title: "EnergyEfficiencyEnumeration",
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
