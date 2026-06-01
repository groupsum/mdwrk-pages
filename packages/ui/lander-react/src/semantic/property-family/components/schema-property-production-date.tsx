import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductionDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProductionDate({ value, description = "The date of production of the item, e.g. vehicle.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProductionDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductionDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-production-date",
    shellClassName: "lander-semantic--schema-property-production-date",
    title: "productionDate",
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
