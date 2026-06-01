import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStage({ value, description = "The stage of the condition, if applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-stage",
    shellClassName: "lander-semantic--schema-property-stage",
    title: "stage",
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
