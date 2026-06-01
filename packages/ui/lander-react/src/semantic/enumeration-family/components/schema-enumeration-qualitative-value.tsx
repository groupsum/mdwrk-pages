import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface QualitativeValueProps extends GeneratedEnumerationProps<string> {}

export function QualitativeValue({ value, description = "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: QualitativeValueProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.QualitativeValueStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-qualitative-value",
    shellClassName: "lander-semantic--schema-enumeration-qualitative-value",
    title: "QualitativeValue",
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
