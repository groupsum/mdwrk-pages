import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCompetencyRequiredProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCompetencyRequired({ value, description = "Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCompetencyRequiredProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CompetencyRequiredPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-competency-required",
    shellClassName: "lander-semantic--schema-property-competency-required",
    title: "competencyRequired",
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
