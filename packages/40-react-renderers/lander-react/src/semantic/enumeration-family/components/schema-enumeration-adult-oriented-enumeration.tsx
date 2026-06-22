import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface AdultOrientedEnumerationProps extends GeneratedEnumerationProps<string> {}

export function AdultOrientedEnumeration({ value, description = "Enumeration of considerations that make a product relevant or potentially restricted for adults only.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: AdultOrientedEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.AdultOrientedEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-adult-oriented-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-adult-oriented-enumeration",
    title: "AdultOrientedEnumeration",
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

(AdultOrientedEnumeration as typeof AdultOrientedEnumeration & { toStructuredData: (props: AdultOrientedEnumerationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
