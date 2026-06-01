import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugUnitProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDrugUnit({ value, description = "The unit in which the drug is measured, e.g. '5 mg tablet'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDrugUnitProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug-unit",
    shellClassName: "lander-semantic--schema-property-drug-unit",
    title: "drugUnit",
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
