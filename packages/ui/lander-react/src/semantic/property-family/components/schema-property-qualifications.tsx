import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyQualificationsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyQualifications({ value, description = "Specific qualifications required for this role or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyQualificationsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.QualificationsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-qualifications",
    shellClassName: "lander-semantic--schema-property-qualifications",
    title: "qualifications",
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
