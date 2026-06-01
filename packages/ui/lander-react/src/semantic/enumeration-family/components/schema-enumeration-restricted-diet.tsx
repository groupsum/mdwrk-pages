import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface RestrictedDietProps extends GeneratedEnumerationProps<string> {}

export function RestrictedDiet({ value, description = "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: RestrictedDietProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.RestrictedDietStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-restricted-diet",
    shellClassName: "lander-semantic--schema-enumeration-restricted-diet",
    title: "RestrictedDiet",
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
