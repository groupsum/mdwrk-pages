import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CompetencyRequiredPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCompetencyRequiredProps extends CompetencyRequiredPropertyInput, GeneratedPropertyUiProps<CompetencyRequiredPropertyInput> {}

export function SchemaPropertyCompetencyRequired({ value: legacyValue, description = "Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCompetencyRequiredProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCompetencyRequired as typeof SchemaPropertyCompetencyRequired & { toStructuredData: (props: SchemaPropertyCompetencyRequiredProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
