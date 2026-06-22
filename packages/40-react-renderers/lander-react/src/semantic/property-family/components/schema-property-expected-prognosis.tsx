import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExpectedPrognosisPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpectedPrognosisProps extends ExpectedPrognosisPropertyInput, GeneratedPropertyUiProps<ExpectedPrognosisPropertyInput> {}

export function SchemaPropertyExpectedPrognosis({ value: legacyValue, description = "The likely outcome in either the short term or long term of the medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExpectedPrognosisProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpectedPrognosisPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expected-prognosis",
    shellClassName: "lander-semantic--schema-property-expected-prognosis",
    title: "expectedPrognosis",
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

(SchemaPropertyExpectedPrognosis as typeof SchemaPropertyExpectedPrognosis & { toStructuredData: (props: SchemaPropertyExpectedPrognosisProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
