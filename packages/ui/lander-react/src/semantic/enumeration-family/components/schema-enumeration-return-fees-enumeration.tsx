import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface ReturnFeesEnumerationProps extends GeneratedEnumerationProps<string> {}

export function ReturnFeesEnumeration({ value, description = "Enumerates several kinds of policies for product return fees.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ReturnFeesEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ReturnFeesEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-return-fees-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-return-fees-enumeration",
    title: "ReturnFeesEnumeration",
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
