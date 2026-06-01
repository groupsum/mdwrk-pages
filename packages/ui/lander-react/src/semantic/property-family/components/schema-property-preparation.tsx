import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreparationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPreparation({ value, description = "Typical preparation that a patient must undergo before having the procedure performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPreparationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreparationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-preparation",
    shellClassName: "lander-semantic--schema-property-preparation",
    title: "preparation",
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
