import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface StatusEnumerationProps extends GeneratedEnumerationProps<string> {}

export function StatusEnumeration({ value, description = "Lists or enumerations dealing with status types.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: StatusEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.StatusEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-status-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-status-enumeration",
    title: "StatusEnumeration",
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

(StatusEnumeration as typeof StatusEnumeration & { toStructuredData: (props: StatusEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
