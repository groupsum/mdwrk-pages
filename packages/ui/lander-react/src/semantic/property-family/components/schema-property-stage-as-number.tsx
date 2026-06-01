import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStageAsNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStageAsNumber({ value, description = "The stage represented as a number, e.g. 3.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStageAsNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StageAsNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-stage-as-number",
    shellClassName: "lander-semantic--schema-property-stage-as-number",
    title: "stageAsNumber",
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
