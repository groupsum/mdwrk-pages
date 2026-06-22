import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface SizeSpecificationProps extends GeneratedEnumerationProps<string> {}

export function SizeSpecification({ value, description = "Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SizeSpecificationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.SizeSpecificationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-size-specification",
    shellClassName: "lander-semantic--schema-enumeration-size-specification",
    title: "SizeSpecification",
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

(SizeSpecification as typeof SizeSpecification & { toStructuredData: (props: SizeSpecificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
