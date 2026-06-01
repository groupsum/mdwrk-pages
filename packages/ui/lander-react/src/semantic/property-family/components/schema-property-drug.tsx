import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDrug({ value, description = "Specifying a drug or medicine used in a medication procedure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDrugProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug",
    shellClassName: "lander-semantic--schema-property-drug",
    title: "drug",
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
