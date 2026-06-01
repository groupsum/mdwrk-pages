import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductionCompanyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProductionCompany({ value, description = "The production company or studio responsible for the item, e.g. series, video game, episode etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProductionCompanyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductionCompanyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-production-company",
    shellClassName: "lander-semantic--schema-property-production-company",
    title: "productionCompany",
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
