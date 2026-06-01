import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGuidelineProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGuideline({ value, description = "A medical guideline related to this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGuidelineProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GuidelinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-guideline",
    shellClassName: "lander-semantic--schema-property-guideline",
    title: "guideline",
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
