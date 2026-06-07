import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GuidelineDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineDateProps extends GuidelineDatePropertyInput, GeneratedPropertyUiProps<GuidelineDatePropertyInput> {}

export function SchemaPropertyGuidelineDate({ value: legacyValue, description = "Date on which this guideline's recommendation was made.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGuidelineDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelineDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline-date",
    shellClassName: "lander-semantic--schema-property-guideline-date",
    title: "guidelineDate",
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

(SchemaPropertyGuidelineDate as typeof SchemaPropertyGuidelineDate & { toStructuredData: (props: SchemaPropertyGuidelineDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
