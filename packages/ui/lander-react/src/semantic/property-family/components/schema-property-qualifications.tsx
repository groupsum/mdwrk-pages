import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { QualificationsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyQualificationsProps extends QualificationsPropertyInput, GeneratedPropertyUiProps<QualificationsPropertyInput> {}

export function SchemaPropertyQualifications({ value: legacyValue, description = "Specific qualifications required for this role or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyQualificationsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyQualifications as typeof SchemaPropertyQualifications & { toStructuredData: (props: SchemaPropertyQualificationsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
