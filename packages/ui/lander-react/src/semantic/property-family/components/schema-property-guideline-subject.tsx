import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GuidelineSubjectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineSubjectProps extends GuidelineSubjectPropertyInput, GeneratedPropertyUiProps<GuidelineSubjectPropertyInput> {}

export function SchemaPropertyGuidelineSubject({ value: legacyValue, description = "The medical conditions, treatments, etc. that are the subject of the guideline.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGuidelineSubjectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelineSubjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline-subject",
    shellClassName: "lander-semantic--schema-property-guideline-subject",
    title: "guidelineSubject",
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

(SchemaPropertyGuidelineSubject as typeof SchemaPropertyGuidelineSubject & { toStructuredData: (props: SchemaPropertyGuidelineSubjectProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
