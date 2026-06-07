import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface ReturnLabelSourceEnumerationProps extends GeneratedEnumerationProps<string> {}

export function ReturnLabelSourceEnumeration({ value, description = "Enumerates several types of return labels for product returns.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: ReturnLabelSourceEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.ReturnLabelSourceEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-return-label-source-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-return-label-source-enumeration",
    title: "ReturnLabelSourceEnumeration",
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

(ReturnLabelSourceEnumeration as typeof ReturnLabelSourceEnumeration & { toStructuredData: (props: ReturnLabelSourceEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
