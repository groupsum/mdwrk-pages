import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface PhysicalActivityCategoryProps extends GeneratedEnumerationProps<string> {}

export function PhysicalActivityCategory({ value, description = "Categories of physical activity, organized by physiologic classification.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: PhysicalActivityCategoryProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.PhysicalActivityCategoryStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-physical-activity-category",
    shellClassName: "lander-semantic--schema-enumeration-physical-activity-category",
    title: "PhysicalActivityCategory",
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
