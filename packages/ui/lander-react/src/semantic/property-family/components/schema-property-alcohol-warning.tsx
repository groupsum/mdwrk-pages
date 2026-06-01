import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlcoholWarningProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlcoholWarning({ value, description = "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlcoholWarningProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlcoholWarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alcohol-warning",
    shellClassName: "lander-semantic--schema-property-alcohol-warning",
    title: "alcoholWarning",
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
