import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpectedPrognosisProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExpectedPrognosis({ value, description = "The likely outcome in either the short term or long term of the medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExpectedPrognosisProps) {
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
