import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface NonprofitTypeProps extends GeneratedEnumerationProps<string> {}

export function NonprofitType({ value, description = "NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: NonprofitTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.NonprofitTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-nonprofit-type",
    shellClassName: "lander-semantic--schema-enumeration-nonprofit-type",
    title: "NonprofitType",
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

(NonprofitType as typeof NonprofitType & { toStructuredData: (props: NonprofitTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
