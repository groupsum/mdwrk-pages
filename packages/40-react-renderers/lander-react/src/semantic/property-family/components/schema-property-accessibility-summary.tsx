import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AccessibilitySummaryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilitySummaryProps extends AccessibilitySummaryPropertyInput, GeneratedPropertyUiProps<AccessibilitySummaryPropertyInput> {}

export function SchemaPropertyAccessibilitySummary({ value: legacyValue, description = "A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \"short descriptions are present but long descriptions will be needed for non-visual users\" or \"short descriptions are present and no long descriptions are needed\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAccessibilitySummaryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessibilitySummaryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-accessibility-summary",
    shellClassName: "lander-semantic--schema-property-accessibility-summary",
    title: "accessibilitySummary",
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

(SchemaPropertyAccessibilitySummary as typeof SchemaPropertyAccessibilitySummary & { toStructuredData: (props: SchemaPropertyAccessibilitySummaryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
