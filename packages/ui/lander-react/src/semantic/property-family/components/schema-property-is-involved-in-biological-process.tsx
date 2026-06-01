import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsInvolvedInBiologicalProcessProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsInvolvedInBiologicalProcess({ value, description = "Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsInvolvedInBiologicalProcessProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsInvolvedInBiologicalProcessPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-involved-in-biological-process",
    shellClassName: "lander-semantic--schema-property-is-involved-in-biological-process",
    title: "isInvolvedInBiologicalProcess",
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
