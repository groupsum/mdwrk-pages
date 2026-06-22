import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface RefundTypeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function RefundTypeEnumeration({ value, description = "Enumerates several kinds of product return refund types.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: RefundTypeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.RefundTypeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-refund-type-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-refund-type-enumeration",
    title: "RefundTypeEnumeration",
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

(RefundTypeEnumeration as typeof RefundTypeEnumeration & { toStructuredData: (props: RefundTypeEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
