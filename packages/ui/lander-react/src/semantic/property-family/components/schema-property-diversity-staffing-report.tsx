import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiversityStaffingReportProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDiversityStaffingReport({ value, description = "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDiversityStaffingReportProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiversityStaffingReportPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diversity-staffing-report",
    shellClassName: "lander-semantic--schema-property-diversity-staffing-report",
    title: "diversityStaffingReport",
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
