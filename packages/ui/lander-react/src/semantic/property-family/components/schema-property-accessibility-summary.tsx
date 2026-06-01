import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessibilitySummaryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessibilitySummary({ value, description = "A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as \"short descriptions are present but long descriptions will be needed for non-visual users\" or \"short descriptions are present and no long descriptions are needed\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessibilitySummaryProps) {
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
