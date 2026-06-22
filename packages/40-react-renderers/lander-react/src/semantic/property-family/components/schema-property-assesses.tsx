import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssessesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssessesProps extends AssessesPropertyInput, GeneratedPropertyUiProps<AssessesPropertyInput> {}

export function SchemaPropertyAssesses({ value: legacyValue, description = "The item being described is intended to assess the competency or learning outcome defined by the referenced term.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssessesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssessesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-assesses",
    shellClassName: "lander-semantic--schema-property-assesses",
    title: "assesses",
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

(SchemaPropertyAssesses as typeof SchemaPropertyAssesses & { toStructuredData: (props: SchemaPropertyAssessesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
