import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseUnitProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDoseUnit({ value, description = "The unit of the dose, e.g. 'mg'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDoseUnitProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-unit",
    shellClassName: "lander-semantic--schema-property-dose-unit",
    title: "doseUnit",
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
