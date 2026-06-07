import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface GenderTypeProps extends GeneratedEnumerationProps<string> {}

export function GenderType({ value, description = "An enumeration of genders.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: GenderTypeProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.GenderTypeStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-gender-type",
    shellClassName: "lander-semantic--schema-enumeration-gender-type",
    title: "GenderType",
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

(GenderType as typeof GenderType & { toStructuredData: (props: GenderTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
