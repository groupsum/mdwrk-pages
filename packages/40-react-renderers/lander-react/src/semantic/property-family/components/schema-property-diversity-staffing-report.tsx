import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DiversityStaffingReportPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiversityStaffingReportProps extends DiversityStaffingReportPropertyInput, GeneratedPropertyUiProps<DiversityStaffingReportPropertyInput> {}

export function SchemaPropertyDiversityStaffingReport({ value: legacyValue, description = "For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDiversityStaffingReportProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDiversityStaffingReport as typeof SchemaPropertyDiversityStaffingReport & { toStructuredData: (props: SchemaPropertyDiversityStaffingReportProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
