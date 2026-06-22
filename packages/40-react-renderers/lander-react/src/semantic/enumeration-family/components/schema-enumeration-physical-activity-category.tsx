import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

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

(PhysicalActivityCategory as typeof PhysicalActivityCategory & { toStructuredData: (props: PhysicalActivityCategoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
