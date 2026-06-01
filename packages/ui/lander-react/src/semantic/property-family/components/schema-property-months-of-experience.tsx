import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMonthsOfExperienceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMonthsOfExperience({ value, description = "Indicates the minimal number of months of experience required for a position.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMonthsOfExperienceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MonthsOfExperiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-months-of-experience",
    shellClassName: "lander-semantic--schema-property-months-of-experience",
    title: "monthsOfExperience",
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
