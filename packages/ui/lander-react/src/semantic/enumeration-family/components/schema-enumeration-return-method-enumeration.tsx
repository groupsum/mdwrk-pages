import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface ReturnMethodEnumerationProps extends GeneratedEnumerationProps<string> {}

export function ReturnMethodEnumeration({ value, description = "Enumerates several types of product return methods.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ReturnMethodEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ReturnMethodEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-return-method-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-return-method-enumeration",
    title: "ReturnMethodEnumeration",
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
